import React, { useEffect, useMemo, useState } from 'react';
import {
  BookOpen, Brain, ChartNoAxesCombined, Check, ChevronRight, CircleHelp,
  Clock3, FileText, GraduationCap, LayoutDashboard, LogOut, Menu, Plus,
  Search, Settings2, ShieldCheck, Sparkles, Target, Trash2, UserRound,
  X, Pencil, Save, LoaderCircle, LockKeyhole, Mail, ArrowRight, LibraryBig, MessagesSquare, Users, Upload, Download, Send
} from 'lucide-react';
import { isSupabaseConfigured, supabase } from './supabase';
import { btechSemesters,questionBank } from './questions';
import CommunityPage from "./CommunityPage.jsx";
const subjects = [
  { name: 'HTML', label: 'Web foundations', color: 'pink', icon: '🌐', description: 'Structure pages with semantic HTML.' },
  { name: 'CSS', label: 'Visual design', color: 'blue', icon: '🎨', description: 'Create responsive, beautiful interfaces.' },
  { name: 'JavaScript', label: 'Programming', color: 'amber', icon: '⚡', description: 'Add logic and interaction to websites.' },
  { name: 'DSA', label: 'Problem solving', color: 'violet', icon: '🧠', description: 'Practice data structures and algorithms.' },
];

const initialDemoNote = null;

function App() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [notice, setNotice] = useState('');
  const [page, setPage] = useState('Dashboard');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notes, setNotes] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [profile, setProfile] = useState({ full_name: '', course: 'CSE' });
  const [dataLoading, setDataLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [noteModal, setNoteModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
   const [noteForm, setNoteForm] = useState({ title: '', subject: 'DSA', content: '',
    file:null,
    sharing_type:'private',
    });
  const [quizTopic, setQuizTopic] = useState('All');
  const [quizLength, setQuizLength] = useState(10);
  const [selectedSemester, setSelectedSemester] = useState('Semester 1');
  const [selectedSubject, setSelectedSubject] = useState('Engineering Mathematics-I');
  const [quizItems, setQuizItems] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [doubtAnswers, setDoubtAnswers] = useState({});
  const [answerForms, setAnswerForms] = useState({});
  const [communityPosts, setCommunityPosts] = useState([]);
  const [communityComments, setCommunityComments] = useState([]);
  const [forumForm, setForumForm] = useState({ title: '', body: '', branch: 'All branches', year: 'All years', category: 'Doubt' });
  const [communityForm, setCommunityForm] = useState({ body: '', branch: 'All branches', year: 'All years' });
  const [communityImageFile, setCommunityImageFile] = useState(null);
  const [forumFilter, setForumFilter] = useState({ branch: 'All branches', year: 'All years' });

  useEffect(() => {
    if (!supabase) { setAuthLoading(false); return; }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user) loadData();
    else { setNotes([]); setAttempts([]); setQuestions([]); setCommunityPosts([]); setProfile({ full_name: '', course: 'CSE', year: '2nd Year', branch: 'CSE' }); }
  }, [session?.user?.id]);

 async function loadData() {
  if (!supabase || !session?.user) return;

  setDataLoading(true);
  const uid = session.user.id;

  try {
    const [noteRes, attemptRes, profileRes] = await Promise.all([
      supabase
        .from('notes')
        .select('*')
        .or(`sharing_type.eq.community,user_id.eq.${uid}`)
        .order('updated_at', { ascending: false }),

      supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', uid)
        .order('created_at', { ascending: false })
        .limit(100),

      supabase
        .from('profiles')
        .select('*')
        .eq('id', uid)
        .maybeSingle()
    ]);

    if (noteRes.error) {
      setNotice(`Notes load nahi hue: ${noteRes.error.message}`);
    } else {
      setNotes(noteRes.data || []);
    }

    if (!attemptRes.error) {
      setAttempts(attemptRes.data || []);
    }

    if (profileRes.data) {
      setProfile({
        full_name: profileRes.data.full_name || '',
        course: profileRes.data.course || 'CSE',
        year: profileRes.data.year || '2nd Year',
        branch:
          profileRes.data.branch ||
          profileRes.data.course ||
          'CSE'
      });
    }

   const doubtsRes = await supabase
      .from('doubts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (!doubtsRes.error) {
      setQuestions(doubtsRes.data || []);
    }


    const postsRes = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (!postsRes.error) {
  const postsWithImages = await Promise.all(
    (postsRes.data || []).map(async (post) => {
      if (!post.image_path) {
        return { ...post, imageUrl: null };
      }

      const { data: signedData, error: signedError } =
        await supabase.storage
          .from('studyspace-community')
          .createSignedUrl(post.image_path, 3600);

      if (signedError) {
        console.error('Image URL error:', signedError.message);
        return { ...post, imageUrl: null };
      }

      return {
        ...post,
        imageUrl: signedData.signedUrl
      };
    })
  );

  setCommunityPosts(postsWithImages);
} else {
  setNotice(`Community posts load nahi hue: ${postsRes.error.message}`);
}
    const commentsRes = await supabase
  .from('community_comments')
  .select('*')
  .order('created_at', { ascending: true });

if (!commentsRes.error) {
  setCommunityComments(commentsRes.data || []);
}
  } catch (error) {
    setNotice(`Data load karne mein error: ${error.message}`);
  } finally {
    setDataLoading(false);
  }
}

  async function handleAuth(e) {
    e.preventDefault(); setAuthError('');
    if (!isSupabaseConfigured) {
      setAuthError('Pehle .env file mein Supabase URL aur key add karo, phir dev server restart karo.');
      return;
    }
    setSaving(true);
    try {
      if (authMode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: authForm.email.trim(),
          password: authForm.password,
          options: { data: { full_name: authForm.name.trim() } }
        });
        if (error) throw error;
        if (data.session) setNotice('Account create ho gaya! Welcome to StudySpace.');
        else setNotice('Signup request sent. Agar email confirmation enabled hai, inbox check karke email confirm karo.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: authForm.email.trim(), password: authForm.password
        });
        if (error) throw error;
        setNotice('Login successful. Welcome back!');
      }
    } catch (err) { setAuthError(err.message || 'Authentication failed.'); }
    finally { setSaving(false); }
  }

  async function logout() {
    if (supabase) await supabase.auth.signOut();
    setPage('Dashboard'); setNotice('You have been logged out.');
  }
async function saveNote(e) {
  e.preventDefault();

  if (!session?.user || !supabase) return;

  if (!noteForm.title.trim()) {
    setNotice('Note ka title likho.');
    return;
  }

  setSaving(true);

  try {
    let filePath = editingNote?.file_path || null;
    let fileName = editingNote?.file_name || null;

    if (noteForm.file) {
      const file = noteForm.file;
      const isCommunity = noteForm.sharing_type === 'community';
      const bucket = isCommunity
        ? 'studyspace-community'
        : 'studyspace-private';

      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const path = `${session.user.id}/${crypto.randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          upsert: false,
          contentType: file.type || 'application/octet-stream'
        });

      if (uploadError) {
        setNotice(`File upload nahi hui: ${uploadError.message}`);
        return;
      }

      filePath = `${bucket}/${path}`;
      fileName = file.name;
    }

    const payload = {
      title: noteForm.title.trim(),
      subject: noteForm.subject,
      branch: noteForm.branch || 'CSE',
      academic_year: noteForm.academic_year || '2nd Year',
      semester: noteForm.semester || 'Semester 3',
      content: noteForm.content,
      user_id: session.user.id,
      updated_at: new Date().toISOString(),
      file_path: filePath,
      file_name: fileName,
      sharing_type: noteForm.sharing_type || 'private'
    };

    const query = editingNote
      ? supabase.from('notes')
          .update(payload)
          .eq('id', editingNote.id)
          .eq('user_id', session.user.id)
      : supabase.from('notes').insert(payload);

    const { error } = await query;

    if (error) {
      setNotice(`Note save nahi hua: ${error.message}`);
      return;
    }

    setNoteModal(false);
    setEditingNote(null);
    setNoteForm({
      title: '',
      subject: 'DSA',
      content: '',
      file: null,
      sharing_type: 'private'
    });
    setNotice('Note cloud mein save ho gaya.');
    await loadData();
  } catch (error) {
    setNotice(`Error: ${error.message || 'Kuch galat hua.'}`);
  } finally {
    setSaving(false);
  }
}
  async function deleteNote(note) {
    if (!confirm(`"${note.title}" delete karna hai?`)) return;
    const { error } = await supabase.from('notes').delete().eq('id', note.id).eq('user_id', session.user.id);
    if (error) setNotice(error.message);
    else { setNotes(old => old.filter(n => n.id !== note.id)); setNotice('Note deleted.'); }
  }

function openNewNote() {
  setEditingNote(null);
  setNoteForm({
    title: '',
    subject: 'DSA',
    content: '',
    file: null,
    sharing_type: 'private',
    branch: 'CSE',
    academic_year: '2nd Year',
    semester: 'Semester 3'
  });
  setNoteModal(true);
}

function openEditNote(note) {
  setEditingNote(note);
  setNoteForm({
    title: note.title || '',
    subject: note.subject || 'DSA',
    content: note.content || '',
    file: null,
    sharing_type: note.sharing_type || 'private',
    branch: note.branch || 'CSE',
    academic_year: note.academic_year || '2nd Year',
    semester: note.semester || 'Semester 3'
  });
  setNoteModal(true);
}
function openEditNote(note) {
  setEditingNote(note);
  setNoteForm({
    title: note.title || '',
    subject: note.subject || 'DSA',
    content: note.content || '',
    file: null,
    sharing_type: note.sharing_type || 'private'
  });
  setNoteModal(true);

  }
function startQuiz(topic = quizTopic, semester = null, subject = null) {
  const available = questionBank.filter((q) => {
    const topicMatch = topic === 'All' || q.topic === topic;
    const semesterMatch = !semester || q.semester === semester;
    const subjectMatch = !subject || q.subject === subject;

    return topicMatch && semesterMatch && subjectMatch;
  });

  const shuffled = [...available].sort(() => Math.random() - 0.5);

  setQuizItems(shuffled.slice(0, Math.min(quizLength, shuffled.length)));
  setQuizTopic(topic);
  setQuizIndex(0);
  setAnswers({});
  setQuizFinished(false);
  setPage('Quiz');
}
  const score = useMemo(() => quizItems.reduce((sum, q, i) => sum + (answers[i] === q.a ? 1 : 0), 0), [quizItems, answers]);

  async function finishQuiz() {
    setQuizFinished(true);
    if (!supabase || !session?.user || quizItems.length === 0) return;
    const topic = quizTopic === 'All' ? 'Mixed practice' : quizTopic;
    const { error } = await supabase.from('quiz_attempts').insert({
      user_id: session.user.id, topic, score, total: quizItems.length
    });
    if (error) setNotice(`Score dikh raha hai, lekin cloud save nahi hua: ${error.message}`);
    else {
      setAttempts(old => [{ id: crypto.randomUUID(), topic, score, total: quizItems.length, created_at: new Date().toISOString() }, ...old]);
      setNotice('Quiz result cloud mein save ho gaya.');
    }
  }

  async function saveProfile(e) {
    e.preventDefault();
    if (!supabase || !session?.user) return;
    setSaving(true);
    const { error } = await supabase.from('profiles').upsert({
      id: session.user.id, full_name: profile.full_name.trim(), course: profile.course, year: profile.year || '2nd Year', branch: profile.branch || profile.course,
      updated_at: new Date().toISOString()
    });
    setSaving(false);
    setNotice(error ? `Profile save nahi hua: ${error.message}` : 'Profile updated successfully.');
  }
   async function loadDoubtAnswers(doubtId) {
  if (!supabase) return;

  const { data, error } = await supabase
    .from('doubt_answers')
    .select('*')
    .eq('doubt_id', doubtId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Answers loading error:', error);
    setNotice(`Answers load nahi hue: ${error.message}`);
    return;
  }

  setDoubtAnswers(previous => ({
    ...previous,
    [doubtId]: data || []
  }));
}
  async function submitDoubtAnswer(e, doubtId) {
  e.preventDefault();

  if (!supabase || !session?.user) {
    setNotice('Answer dene ke liye login zaroori hai.');
    return;
  }

  const answerText = (answerForms[doubtId] || '').trim();

  if (!answerText) {
    setNotice('Pehle apna answer likho.');
    return;
  }

  const { error } = await supabase
    .from('doubt_answers')
    .insert({
      doubt_id: doubtId,
      user_id: session.user.id,
      answer: answerText,
      author_name: profile.full_name || session.user.email
    });

  if (error) {
    setNotice(`Answer post nahi hua: ${error.message}`);
    return;
  }

  setAnswerForms(previous => ({
    ...previous,
    [doubtId]: ''
  }));

  setNotice('Answer successfully post ho gaya!');
  await loadDoubtAnswers(doubtId);
}

 
  async function submitDoubt(e) {
    e.preventDefault();
    if (!supabase || !session?.user) { setNotice('Forum use karne ke liye Supabase setup aur login zaroori hai.'); return; }
    if (!forumForm.title.trim() || !forumForm.body.trim()) return;
    const { error } = await supabase.from('doubts').insert({ user_id: session.user.id, author_name: profile.full_name || session.user.email, title: forumForm.title.trim(), body: forumForm.body.trim(), category: forumForm.category, branch: forumForm.branch, year: forumForm.year });
    if (error) setNotice(`Question post nahi hua: ${error.message}`); else { setForumForm({ title: '', body: '', branch: profile.branch || 'CSE', year: profile.year || '2nd Year', category: 'Doubt' }); setNotice('Question community mein post ho gaya.'); const { data } = await supabase.from('doubts').select('*').order('created_at', { ascending: false }).limit(100); setQuestions(data || []); }
  }
 async function submitCommunityPost(e) {
  e.preventDefault();

  if (!supabase || !session?.user) {
    setNotice('Community use karne ke liye login zaroori hai.');
    return;
  }

  if (!communityForm.body.trim()) {
    setNotice('Post mein kuch text likho.');
    return;
  }

  let imagePath = null;

  if (communityImageFile) {
    const file = communityImageFile;
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif'
    ];

    if (!allowedTypes.includes(file.type)) {
      setNotice('JPG, PNG, WEBP ya GIF image select karo.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setNotice('Image 5 MB se chhoti honi chahiye.');
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filePath = `${session.user.id}/${crypto.randomUUID()}.${extension}`;

    const { data: uploadedFile, error: uploadError } = await supabase.storage
      .from('studyspace-community')
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false
      });

    if (uploadError) {
      setNotice(`Image upload nahi hui: ${uploadError.message}`);
      return;
    }

    imagePath = uploadedFile.path;
  }

  const { error } = await supabase.from('community_posts').insert({
    user_id: session.user.id,
    author_name: profile.full_name || session.user.email,
    body: communityForm.body.trim(),
    branch: communityForm.branch,
    year: communityForm.year,
    image_path: imagePath
  });

  if (error) {
    setNotice(`Post publish nahi hua: ${error.message}`);
    return;
  }

  setCommunityForm({
    body: '',
    branch: profile.branch || 'CSE',
    year: profile.year || '2nd Year'
  });

  setCommunityImageFile(null);
  setNotice('Community post publish ho gaya!');

 await loadData();
}
  async function submitCommunityComment(postId, body) {
  if (!supabase || !session?.user) {
    setNotice('Comment karne ke liye login zaroori hai.');
    return;
  }

  if (!body.trim()) return;

  const { error } = await supabase
    .from('community_comments')
    .insert({
      post_id: String(postId),
      user_id: session.user.id,
      body: body.trim()
    });

  if (error) {
    setNotice(`Comment nahi hua: ${error.message}`);
    return;
  }

  const { data, error: loadError } = await supabase
    .from('community_comments')
    .select('*')
    .order('created_at', { ascending: true });

  if (!loadError) {
    setCommunityComments(data || []);
  }

  setNotice('Comment successfully add ho gaya!');
}
  async function deleteCommunityItem(table, id, ownerId, setter) {
    if (ownerId !== session?.user?.id) { setNotice('Aap sirf apni post delete kar sakte hain.'); return; }
    const { error } = await supabase.from(table).delete().eq('id', id).eq('user_id', session.user.id);
    if (error) setNotice(error.message); else setter(old => old.filter(item => item.id !== id));
  }
 async function downloadNote(note) {
  if (!supabase || !note?.file_path) {
    setNotice('Is note ke saath koi uploaded file nahi hai.');
    return;
  }

  try {
    const firstSlash = note.file_path.indexOf('/');

    if (firstSlash === -1) {
      setNotice('File ka storage path sahi nahi hai.');
      return;
    }

    const bucket = note.file_path.slice(0, firstSlash);
    const path = note.file_path.slice(firstSlash + 1);

    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path);

    if (error) {
      setNotice(`Download nahi hua: ${error.message}`);
      return;
    }

    const url = URL.createObjectURL(data);
    const link = document.createElement('a');

    link.href = url;
    link.download = note.file_name || note.title || 'study-note';
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('File download shuru ho gaya.');
  } catch (error) {
    setNotice(`Download error: ${error.message || 'Kuch galat hua.'}`);
  }
}
  async function uploadNoteFile(file) {
  if (!file) return;
  const text = await file.text();
  setNoteForm({
    title: file.name.replace(/\.[^.]+$/, ''),
    subject: profile.branch || 'General',
    content: text
  });
  setEditingNote(null);
  setNoteModal(true);
}
  const filteredNotes = notes.filter(n =>
    `${n.title} ${n.subject} ${n.content}`.toLowerCase().includes(search.toLowerCase())
  );
  const totalAnswered = Object.keys(answers).length;
  const average = attempts.length ? Math.round(attempts.reduce((sum, a) => sum + (a.total ? a.score / a.total : 0), 0) / attempts.length * 100) : 0;
  const best = attempts.length ? Math.max(...attempts.map(a => a.total ? Math.round(a.score / a.total * 100) : 0)) : 0;

  if (authLoading) return <div className="loading-screen"><div className="brand-mark"><GraduationCap /></div><p>StudySpace is loading...</p></div>;
  if (!session) return <AuthScreen
    authMode={authMode} setAuthMode={setAuthMode} authForm={authForm}
    setAuthForm={setAuthForm} authError={authError} notice={notice}
    saving={saving} handleAuth={handleAuth} configured={isSupabaseConfigured}
  />;

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'My Notes', icon: FileText },
    { label: 'Quiz Zone', icon: Brain },
    { label: 'Doubt Forum', icon: CircleHelp },
    { label: 'Student Community', icon: Users },
    { label: 'Notes Sharing', icon: Upload },
    { label: 'PYQ Library', icon: FileText },
    { label: 'Subjects', icon: LibraryBig },
    { label: 'My Progress', icon: ChartNoAxesCombined },
    { label: 'Profile', icon: UserRound },
  ];

  return <div className="app-shell">
    <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><GraduationCap size={23} /></div><div><strong>StudySpace</strong><span>YOUR LEARNING HUB</span></div><button className="icon-button mobile-close" onClick={() => setMobileMenu(false)}><X size={18}/></button></div>
      <div className="workspace-label">WORKSPACE</div>
      <nav className="nav-list">
        {navItems.map(item => <button key={item.label} className={`nav-item ${page === item.label ? 'active' : ''}`} onClick={() => { setPage(item.label); setMobileMenu(false); }}>
          <item.icon size={19} strokeWidth={1.8}/><span>{item.label}</span>{item.label === 'My Notes' && <small>{notes.length}</small>}
        </button>)}
      </nav>
      <div className="sidebar-spacer" />
      <div className="sidebar-card"><div className="sparkle-circle"><Sparkles size={17}/></div><strong>Small steps, big goals.</strong><p>Your next breakthrough starts with today's practice.</p><button onClick={() => startQuiz('All')}>Practice now <ArrowRight size={15}/></button></div>
      <div className="sidebar-user"><div className="avatar">{(profile.full_name || session.user.email || 'S').slice(0,1).toUpperCase()}</div><div className="user-copy"><strong>{profile.full_name || 'Student'}</strong><span>{session.user.email}</span></div><button className="icon-button" title="Log out" onClick={logout}><LogOut size={17}/></button></div>
    </aside>
    {mobileMenu && <button className="scrim" aria-label="Close navigation" onClick={() => setMobileMenu(false)} />}
    <main className="main-area">
      <header className="topbar"><button className="icon-button menu-toggle" onClick={() => setMobileMenu(true)}><Menu/></button><div className="breadcrumb">Workspace <ChevronRight size={14}/> <strong>{page}</strong></div><div className="topbar-actions"><div className="cloud-status"><span/> Cloud synced</div><button className="profile-mini" onClick={() => setPage('Profile')}><div className="avatar">{(profile.full_name || session.user.email || 'S').slice(0,1).toUpperCase()}</div><ChevronRight size={14}/></button></div></header>
      <div className="content-wrap">
        {notice && <div className="notice"><span>{notice}</span><button onClick={() => setNotice('')}><X size={16}/></button></div>}
        {dataLoading && <div className="inline-loading"><LoaderCircle className="spin" size={16}/> Syncing your workspace…</div>}
        {page === 'Dashboard' && <Dashboard profile={profile} notes={notes} attempts={attempts} average={average} best={best} setPage={setPage} startQuiz={startQuiz} openNewNote={openNewNote} />}
        {page === 'My Notes' && <NotesPage notes={filteredNotes} search={search} setSearch={setSearch} openNewNote={openNewNote} openEditNote={openEditNote} deleteNote={deleteNote} />}
       {page === 'Doubt Forum' && <DoubtForumPage
       questions={questions}
       form={forumForm}
       setForm={setForumForm}
       onSubmit={submitDoubt}
       doubtAnswers={doubtAnswers}
       answerForms={answerForms}
       setAnswerForms={setAnswerForms}
       onLoadAnswers={loadDoubtAnswers}
       onSubmitAnswer={submitDoubtAnswer}
       profile={profile}
       filter={forumFilter}
       setFilter={setForumFilter}
       onDelete={(item)=>deleteCommunityItem('doubts',item.id,item.user_id,setQuestions)}
       userId={session.user.id}
       comments={communityComments}
      onComment={submitCommunityComment}
       />}
       
        {page === 'Student Community' && <CommunityPage posts={communityPosts} form={communityForm} setForm={setCommunityForm} onSubmit={submitCommunityPost} 
        imageFile={communityImageFile}
        setImageFile={setCommunityImageFile}
        filter={forumFilter} setFilter={setForumFilter} onDelete={(item)=>deleteCommunityItem('community_posts',item.id,item.user_id,setCommunityPosts)} userId={session.user.id} />}
        {page === 'Notes Sharing' && <NotesSharingPage notes={notes} openNewNote={openNewNote} uploadNoteFile={uploadNoteFile} downloadNote={downloadNote} />}
        {page === 'PYQ Library' && <PYQLibraryPage
         session={session}
         profile={profile}
         setNotice={setNotice}
         />}
        {page === 'Quiz Zone' && <QuizPage quizTopic={quizTopic} setQuizTopic={setQuizTopic} quizLength={quizLength} setQuizLength={setQuizLength} startQuiz={startQuiz} attempts={attempts}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject} />}
        {page === 'Subjects' && <SubjectsPage startQuiz={startQuiz} setPage={setPage} />}
        {page === 'My Progress' && <ProgressPage attempts={attempts} average={average} best={best} notes={notes} />}
        {page === 'Profile' && <ProfilePage profile={profile} setProfile={setProfile} saveProfile={saveProfile} saving={saving} email={session.user.email} />}
        {page === 'Quiz' && <QuizRunner quizItems={quizItems} quizIndex={quizIndex} setQuizIndex={setQuizIndex} answers={answers} setAnswers={setAnswers} quizFinished={quizFinished} finishQuiz={finishQuiz} score={score} setPage={setPage} startQuiz={startQuiz} topic={quizTopic} totalAnswered={totalAnswered} />}
      </div>
      <footer className="footer">Made for curious minds <span>✦</span> StudySpace</footer>
    </main>
    {noteModal && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setNoteModal(false); }}>
      <form className="modal-card" onSubmit={saveNote}><div className="modal-heading"><div><span className="eyebrow">{editingNote ? 'EDIT NOTE' : 'NEW NOTE'}</span><h2>{editingNote ? 'Update your note' : 'Capture an idea'}</h2></div><button type="button" className="icon-button" onClick={() => setNoteModal(false)}><X/></button></div>
        <label>Note title<input autoFocus required value={noteForm.title} onChange={e => setNoteForm({...noteForm,title:e.target.value})} placeholder="e.g. Binary search notes"/></label>
        <label>Subject<select value={noteForm.subject} onChange={e => setNoteForm({...noteForm,subject:e.target.value})}>{['DSA','HTML','CSS','JavaScript','General'].map(s=><option key={s}>{s}</option>)}</select></label>
        <label>
  Branch
  <select
    value={noteForm.branch || 'CSE'}
    onChange={e =>
      setNoteForm({ ...noteForm, branch: e.target.value })
    }
  >
    {['CSE', 'ECE', 'Electrical', 'Mechanical', 'Civil', 'IT', 'Chemical', 'Other'].map(branch => (
      <option key={branch} value={branch}>{branch}</option>
    ))}
  </select>
</label>

<label>
  Academic Year
  <select
    value={noteForm.academic_year || '2nd Year'}
    onChange={e =>
      setNoteForm({ ...noteForm, academic_year: e.target.value })
    }
  >
    {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(year => (
      <option key={year} value={year}>{year}</option>
    ))}
  </select>
</label>

<label>
  Semester
  <select
    value={noteForm.semester || 'Semester 3'}
    onChange={e =>
      setNoteForm({ ...noteForm, semester: e.target.value })
    }
  >
    {Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`).map(semester => (
      <option key={semester} value={semester}>{semester}</option>
    ))}
  </select>
</label>
        <label>Choose PDF or Word file
  <input
    type="file"
    accept=".pdf,.doc,.docx,.txt,.md"
    onChange={e =>
      setNoteForm({
        ...noteForm,
        file: e.target.files?.[0] || null,
        title: noteForm.title || (e.target.files?.[0]?.name || '').replace(/\.[^.]+$/, '')
      })
    }
  />
</label>

<label>Sharing
  <select
    value={noteForm.sharing_type || 'private'}
    onChange={e =>
      setNoteForm({ ...noteForm, sharing_type: e.target.value })
    }
  >
    <option value="private">Private — only me</option>
    <option value="community">Community — share with students</option>
  </select>
</label>
        <label>Your notes<textarea rows="7" value={noteForm.content} onChange={e => setNoteForm({...noteForm,content:e.target.value})} placeholder="Write your key ideas here…"/></label>
        <div className="modal-actions"><button type="button" className="btn btn-ghost" onClick={() => setNoteModal(false)}>Cancel</button><button className="btn btn-primary" disabled={saving}><Save size={16}/>{saving?'Saving…':'Save to cloud'}</button></div>
      </form>
    </div>}
  </div>;
}

function AuthScreen({authMode,setAuthMode,authForm,setAuthForm,authError,notice,saving,handleAuth,configured}) {
  return <div className="auth-layout">
    <section className="auth-visual"><div className="auth-brand"><div className="brand-mark"><GraduationCap/></div><strong>StudySpace</strong></div><div className="auth-visual-copy"><span className="eyebrow light">YOUR SPACE TO GROW</span><h1>Learn a little.<br/><em>Grow a lot.</em></h1><p>One calm space for your notes, practice, and progress. Make learning a habit you love.</p><div className="visual-pills"><span><BookOpen size={15}/> Smart notes</span><span><Brain size={15}/> Daily practice</span><span><ChartNoAxesCombined size={15}/> Real progress</span></div></div><div className="auth-quote"><span>“</span><p>Every expert was once a beginner.</p></div><div className="auth-orb orb-one"/><div className="auth-orb orb-two"/></section>
    <section className="auth-panel"><div className="auth-form-wrap"><div className="mobile-auth-brand"><div className="brand-mark"><GraduationCap/></div><strong>StudySpace</strong></div><span className="eyebrow">{authMode==='login'?'WELCOME BACK':'START YOUR JOURNEY'}</span><h2>{authMode==='login'?'Good to see you again':'Create your space'}</h2><p className="auth-subtitle">{authMode==='login'?'Pick up where your learning left off.':'Build your own learning routine, one day at a time.'}</p>
      {!configured && <div className="setup-warning"><Settings2 size={18}/><div><strong>One-time setup needed</strong><p>Add your Supabase URL and key in the .env file. See README.md included with this project.</p></div></div>}
      {notice && <div className="notice auth-notice">{notice}</div>}
      <form onSubmit={handleAuth} className="auth-form">
        {authMode==='signup' && <label>Full name<div className="input-wrap"><UserRound size={17}/><input required value={authForm.name} onChange={e=>setAuthForm({...authForm,name:e.target.value})} placeholder="Your name"/></div></label>}
        <label>Email address<div className="input-wrap"><Mail size={17}/><input type="email" required autoComplete="email" value={authForm.email} onChange={e=>setAuthForm({...authForm,email:e.target.value})} placeholder="you@example.com"/></div></label>
        <label>Password<div className="input-wrap"><LockKeyhole size={17}/><input type="password" required minLength={6} autoComplete={authMode==='login'?'current-password':'new-password'} value={authForm.password} onChange={e=>setAuthForm({...authForm,password:e.target.value})} placeholder="At least 6 characters"/></div></label>
        {authError && <div className="error-text">{authError}</div>}
        <button className="btn btn-primary auth-submit" disabled={saving}>{saving?<LoaderCircle className="spin" size={17}/>:null}{authMode==='login'?'Sign in':'Create account'} <ArrowRight size={17}/></button>
      </form>
      <div className="auth-switch">{authMode==='login'?"New to StudySpace?":"Already have an account?"} <button onClick={()=>{setAuthMode(authMode==='login'?'signup':'login');}}>{authMode==='login'?'Create an account':'Sign in instead'}</button></div>
      <div className="secure-note"><ShieldCheck size={15}/> Your notes are private to your account.</div>
    </div><div className="auth-footer">© 2026 StudySpace · Made for learning</div></section>
  </div>;
}

function PageHeading({eyebrow,title,description,action}) {
  return <div className="page-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}
function Dashboard({profile,notes,attempts,average,best,setPage,startQuiz,openNewNote}) {
  const recent = attempts.slice(0,4);
  return <div className="page-content"><PageHeading eyebrow="YOUR LEARNING OVERVIEW" title={`Hey${profile.full_name ? ', '+profile.full_name.split(' ')[0] : ' there'} 👋`} description="A little progress each day adds up to big results." action={<button className="btn btn-primary" onClick={openNewNote}><Plus size={17}/> New note</button>}/>
    <section className="hero-card"><div className="hero-glow"/><div className="hero-copy"><span className="hero-tag"><Sparkles size={14}/> YOUR PERSONAL LEARNING SPACE</span><h2>Make today count.</h2><p>Learn something new, test what you know, and keep your momentum going.</p><button className="btn btn-light" onClick={()=>startQuiz('All')}>Start a quick quiz <ArrowRight size={16}/></button></div><div className="hero-art"><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-book"><BookOpen size={61}/><span>LEARN</span></div><div className="art-chip chip-a"><Target size={18}/></div><div className="art-chip chip-b"><Sparkles size={18}/></div><div className="art-dot dot-a"/><div className="art-dot dot-b"/></div></section>
    <div className="stat-grid"><StatCard icon={FileText} label="Notes saved" value={notes.length} hint="Your personal library" tone="purple"/><StatCard icon={Brain} label="Quiz attempts" value={attempts.length} hint="Keep practicing" tone="peach"/><StatCard icon={Target} label="Average score" value={`${average}%`} hint="Across saved attempts" tone="mint"/><StatCard icon={ChartNoAxesCombined} label="Best score" value={`${best}%`} hint="Your personal best" tone="blue"/></div>
    <div className="section-heading"><div><h2>Explore subjects</h2><p>Choose a topic and get into the flow.</p></div><button className="text-link" onClick={()=>setPage('Subjects')}>All subjects <ChevronRight size={16}/></button></div>
    <div className="subject-grid">{subjects.map(s=><button key={s.name} className="subject-card" onClick={()=>startQuiz(s.name)}><div className={`subject-icon ${s.color}`}>{s.icon}</div><span className="subject-label">{s.label}</span><h3>{s.name}</h3><p>{s.description}</p><div className="subject-bottom"><span>{questionBank.filter(q=>q.topic===s.name).length} practice questions</span><span className="circle-arrow"><ArrowRight size={15}/></span></div></button>)}</div>
    <div className="bottom-grid"><section className="panel"><div className="panel-heading"><div><h2>Recent notes</h2><p>Your ideas, all in one place.</p></div><button className="text-link" onClick={()=>setPage('My Notes')}>View all <ChevronRight size={15}/></button></div>{notes.length===0?<EmptyState icon={FileText} title="Your notes live here" text="Save key ideas so they are easy to revisit." action={<button className="btn btn-soft" onClick={openNewNote}><Plus size={15}/> Create first note</button>}/>:<div className="recent-list">{notes.slice(0,3).map(n=><div className="recent-note" key={n.id}><div className="recent-note-icon"><FileText size={18}/></div><div className="recent-note-copy"><strong>{n.title}</strong><span>{n.subject} · {new Date(n.updated_at).toLocaleDateString()}</span></div><ChevronRight size={16}/></div>)}</div>}</section>
      <section className="panel"><div className="panel-heading"><div><h2>Keep your streak alive</h2><p>Small practice beats no practice.</p></div><div className="flame">✦</div></div><div className="streak-box"><div className="streak-big">{attempts.length}<span> practice sessions</span></div><p>{attempts.length ? 'You are building momentum. Keep going!' : 'Take your first quiz today and start tracking your learning.'}</p><button className="btn btn-primary btn-full" onClick={()=>startQuiz('All')}>Practice now <ArrowRight size={16}/></button></div></section></div>
  </div>;
}
function StatCard({icon:Icon,label,value,hint,tone}) { return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={19}/></div><span className="stat-label">{label}</span><strong className="stat-value">{value}</strong><span className="stat-hint">{hint}</span></div>; }
function EmptyState({icon:Icon,title,text,action}) {return <div className="empty-state"><div className="empty-icon"><Icon size={23}/></div><strong>{title}</strong><p>{text}</p>{action}</div>;}
function NotesPage({
  notes,
  search,
  setSearch,
  openNewNote,
  openEditNote,
  deleteNote
}) {
  const [branchFilter, setBranchFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [semesterFilter, setSemesterFilter] = useState('All');
  const [subjectFilter, setSubjectFilter] = useState('All');

  const branches = [...new Set(notes.map(n => n.branch).filter(Boolean))].sort();
  const years = [...new Set(notes.map(n => n.academic_year).filter(Boolean))].sort();
  const semesters = [...new Set(notes.map(n => n.semester).filter(Boolean))].sort();
  const subjects = [...new Set(notes.map(n => n.subject).filter(Boolean))].sort();

  const searchTerm = search.trim().toLowerCase();

  const filteredNotes = notes.filter(note =>
    (branchFilter === 'All' || note.branch === branchFilter) &&
    (yearFilter === 'All' || note.academic_year === yearFilter) &&
    (semesterFilter === 'All' || note.semester === semesterFilter) &&
    (subjectFilter === 'All' || note.subject === subjectFilter) &&
    (
      !searchTerm ||
      [note.title, note.subject, note.content, note.file_name]
        .some(value => (value || '').toLowerCase().includes(searchTerm))
    )
  );

  return (
    <div className="page-content">
      <PageHeading
        eyebrow="STUDENT NOTES LIBRARY"
        title="Notes Library"
        description="Find notes by branch, year, semester and subject."
        action={
          <button className="btn btn-primary" onClick={openNewNote}>
            <Plus size={17} /> New note
          </button>
        }
      />

      <div className="search-bar">
        <Search size={18} />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search notes, subjects or file names..."
        />
        <span>{filteredNotes.length} notes</span>
      </div>

      <div className="notes-filters">
        <label>
          Branch
          <select value={branchFilter} onChange={e => setBranchFilter(e.target.value)}>
            <option value="All">All branches</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </label>

        <label>
          Academic Year
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
            <option value="All">All years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>

        <label>
          Semester
          <select value={semesterFilter} onChange={e => setSemesterFilter(e.target.value)}>
            <option value="All">All semesters</option>
            {semesters.map(semester => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>
        </label>

        <label>
          Subject
          <select value={subjectFilter} onChange={e => setSubjectFilter(e.target.value)}>
            <option value="All">All subjects</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setBranchFilter('All');
            setYearFilter('All');
            setSemesterFilter('All');
            setSubjectFilter('All');
            setSearch('');
          }}
        >
          Clear filters
        </button>
      </div>

      {filteredNotes.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No notes found"
          text="Try changing your search or filters, or upload a new note."
          action={
            <button className="btn btn-primary" onClick={openNewNote}>
              <Plus size={16} /> Create a note
            </button>
          }
        />
      ) : (
        <div className="notes-grid">
          {filteredNotes.map(n => (
            <article className="note-card" key={n.id}>
              <div className="note-card-top">
                <span className={`tag tag-${(n.subject || 'General').toLowerCase()}`}>
                  {n.subject || 'General'}
                </span>

                <div className="note-actions">
                  <button
                    className="icon-button"
                    title="Edit note"
                    onClick={() => openEditNote(n)}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    className="icon-button danger-hover"
                    title="Delete note"
                    onClick={() => deleteNote(n)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <h3>{n.title}</h3>
              <p>{n.content || n.file_name || 'No content added yet.'}</p>

              <div className="note-metadata">
                <span>Branch: {n.branch || 'Not specified'}</span>
                <span>Year: {n.academic_year || 'Not specified'}</span>
                <span>Semester: {n.semester || 'Not specified'}</span>
                <span>Sharing: {n.sharing_type === 'community' ? 'Shared' : 'Private'}</span>
                {n.file_name && <span>File: {n.file_name}</span>}
              </div>

              <div className="note-card-footer">
                <span>
                  <Clock3 size={13} /> Uploaded{' '}
                  {n.created_at
                    ? new Date(n.created_at).toLocaleDateString()
                    : 'Date unavailable'}
                </span>
                <button onClick={() => openEditNote(n)}>
                  Open note <ChevronRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
function QuizPage({
  quizTopic,
  setQuizTopic,
  quizLength,
  setQuizLength,
  startQuiz,
  attempts,
  selectedSemester,
  setSelectedSemester,
  selectedSubject,
  setSelectedSubject
})  {
  const filtered = questionBank.filter((q) =>
  q.semester === selectedSemester &&
  q.subject === selectedSubject
);
  return <div className="page-content"><PageHeading eyebrow="PRACTICE MAKES PROGRESS" title="Quiz Zone" description="Test your understanding with quick, focused practice."/>
    <div className="quiz-intro"><div className="quiz-intro-copy"><span className="eyebrow light">YOUR NEXT CHALLENGE</span><h2>Ready to test yourself?</h2><p>Choose a subject, set your session length, and learn from every answer.</p><div className="quiz-meta"><span><CircleHelp size={16}/>{questionBank.length} questions in bank</span><span><Clock3 size={16}/>{Math.max(2,Math.round(quizLength*0.6))}–{quizLength} min approx.</span></div></div><div className="quiz-big-icon"><Brain size={75}/><Sparkles size={25}/></div></div>
    <section className="panel quiz-settings"><div className="panel-heading"><div><h2>Set up your session</h2><p>Make the practice fit your day.</p></div></div><label className="field-label">Choose semester</label>
<select
  className="input"
  value={selectedSemester}
  onChange={(e) => {
    setSelectedSemester(e.target.value);
    const nextSemester = btechSemesters.find(
      (s) => s.semester === e.target.value
    );
    setSelectedSubject(nextSemester?.subjects[0] || '');
  }}
>
  {btechSemesters.map((s) => (
    <option key={s.semester} value={s.semester}>
      {s.semester}
    </option>
  ))}
</select>

<label className="field-label">Choose subject</label>
<select
  className="input"
  value={selectedSubject}
  onChange={(e) => setSelectedSubject(e.target.value)}
>
  {(
    btechSemesters.find((s) => s.semester === selectedSemester)?.subjects || []
  ).map((subject) => (
    <option key={subject} value={subject}>
      {subject}
    </option>
  ))}
</select><p>
  Available questions: <strong>{filtered.length}</strong>
</p><label className="field-label">Number of questions</label><div className="length-options">{[10,20,50].map(n=><button key={n} className={quizLength===n?'selected':''} onClick={()=>setQuizLength(n)}><strong>{Math.min(n,filtered.length)}</strong><span>{n===10?'Quick':n===20?'Focused':'Full practice'}</span></button>)}</div><div className="quiz-start-row"><span><ShieldCheck size={16}/> Instant feedback and explanations</span><button
  className="btn btn-primary"
  disabled={filtered.length === 0}
  onClick={() =>
    startQuiz('All', selectedSemester, selectedSubject)
  }
>
  Start quiz <ArrowRight size={16} />
</button></div></section>
    <section className="panel"><div className="panel-heading"><div><h2>Recent attempts</h2><p>Your saved quiz results.</p></div></div>{attempts.length===0?<EmptyState icon={Brain} title="Your first score is waiting" text="Complete a quiz to see your results here."/>:<div className="attempt-list">{attempts.slice(0,5).map(a=><div className="attempt-row" key={a.id}><div className="attempt-badge"><Brain size={17}/></div><div className="attempt-info"><strong>{a.topic}</strong><span>{new Date(a.created_at).toLocaleString()}</span></div><strong className="attempt-score">{a.score}/{a.total}</strong><span className="attempt-percent">{Math.round(a.score/a.total*100)}%</span></div>)}</div>}</section>
  </div>;
}
function SubjectsPage({ startQuiz, setPage }) {
  const [selectedSemester, setSelectedSemester] = useState(
    btechSemesters[0]?.semester || 'Semester 1'
  );

  const currentSemester = btechSemesters.find(
    (s) => s.semester === selectedSemester
  );

  const currentSubjects = currentSemester?.subjects || [];

  return (
    <div className="page-content">
      <PageHeading
        eyebrow="YOUR LEARNING LIBRARY"
        title="Explore subjects"
        description="Choose a semester and explore its subjects."
      />

      <section className="panel">
        <h2>Select semester</h2>

        <select
          className="input"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          {btechSemesters.map((s) => (
            <option key={s.semester} value={s.semester}>
              {s.semester}
            </option>
          ))}
        </select>
      </section>

      <div className="subject-grid subject-grid-large">
        {currentSubjects.map((subject, index) => {
          const count = questionBank.filter(
            (q) => q.topic === subject
          ).length;

          return (
            <article
              key={subject}
              className="subject-card subject-card-large"
            >
              <div className="subject-icon violet">
                📘
              </div>

              <span className="subject-label">
                {selectedSemester}
              </span>

              <h3>{subject}</h3>

              <p>
                Practice concepts and prepare for your semester exams.
              </p>

              <div className="subject-progress">
                <div>
                  <span>Practice bank</span>
                  <strong>{count} questions</strong>
                </div>

                <div className="mini-progress">
                  <span
                    style={{
                      width: `${Math.min(100, count * 2)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="subject-bottom">
                <button
                  className="btn btn-soft"
                  onClick={() =>
                    startQuiz('All', selectedSemester, subject)
                  }
                  disabled={count === 0}
                >
                  Start practice <ArrowRight size={15} />
                </button>

                <button
                  className="text-link"
                  onClick={() => setPage('My Notes')}
                >
                  My notes
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {currentSubjects.length === 0 && (
        <section className="panel">
          No subjects found for this semester.
        </section>
      )}

      <div className="tip-banner">
        <div className="tip-icon">
          <Sparkles size={20} />
        </div>
        <div>
          <strong>Study tip</strong>
          <p>
            Study one subject at a time and practise questions to
            strengthen your understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
function ProgressPage({attempts,average,best,notes}) {
  const topicStats = ['HTML','CSS','JavaScript','DSA','Mixed practice'].map(topic=>{
    const list=attempts.filter(a=>a.topic===topic);
    const pct=list.length?Math.round(list.reduce((s,a)=>s+a.score/a.total,0)/list.length*100):0;
    return {topic,list,pct};
  });
  return <div className="page-content"><PageHeading eyebrow="YOUR GROWTH JOURNEY" title="My Progress" description="Every practice session is a step forward."/><div className="progress-highlight"><div><span className="eyebrow light">OVERALL AVERAGE</span><div className="progress-big">{average}<span>%</span></div><p>Based on {attempts.length} saved quiz {attempts.length===1?'attempt':'attempts'}.</p></div><div className="progress-circle" style={{'--progress':`${average*3.6}deg`}}><div><strong>{average}%</strong><span>average</span></div></div></div>
    <div className="stat-grid"><StatCard icon={Brain} label="Total attempts" value={attempts.length} hint="All saved sessions" tone="purple"/><StatCard icon={Target} label="Personal best" value={`${best}%`} hint="Highest attempt score" tone="mint"/><StatCard icon={FileText} label="Notes created" value={notes.length} hint="Ideas you've saved" tone="peach"/><StatCard icon={ChartNoAxesCombined} label="Question bank" value={questionBank.length} hint="Available to practice" tone="blue"/></div>
    <section className="panel"><div className="panel-heading"><div><h2>Subject breakdown</h2><p>Average score by quiz topic.</p></div></div><div className="topic-progress-list">{topicStats.map(t=><div className="topic-progress-row" key={t.topic}><div className="topic-progress-heading"><strong>{t.topic}</strong><span>{t.list.length?`${t.pct}% · ${t.list.length} attempt${t.list.length===1?'':'s'}`:'Not attempted yet'}</span></div><div className="progress-track"><span style={{width:`${t.pct}%`}}/></div></div>)}</div></section>
    <section className="panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Your latest practice sessions.</p></div></div>{attempts.length===0?<EmptyState icon={ChartNoAxesCombined} title="Your progress starts here" text="Finish your first quiz to build your progress history."/>:<div className="attempt-list">{attempts.slice(0,8).map(a=><div className="attempt-row" key={a.id}><div className="attempt-badge"><Check size={17}/></div><div className="attempt-info"><strong>{a.topic}</strong><span>{new Date(a.created_at).toLocaleString()}</span></div><strong className="attempt-score">{a.score}/{a.total}</strong><span className="attempt-percent">{Math.round(a.score/a.total*100)}%</span></div>)}</div>}</section>
  </div>;
}

function StudentFilters({filter,setFilter}) { return <div className="student-filters"><label>Year <select value={filter.year} onChange={e=>setFilter({...filter,year:e.target.value})}>{['All years','1st Year','2nd Year','3rd Year','4th Year'].map(y=><option key={y}>{y}</option>)}</select></label><label>Branch <select value={filter.branch} onChange={e=>setFilter({...filter,branch:e.target.value})}>{['All branches','CSE','IT','ECE','EEE','Mechanical Engineering','Civil Engineering','Chemical Engineering','Other'].map(b=><option key={b}>{b}</option>)}</select></label></div>; }
function DoubtForumPage({
  questions,
  form,
  setForm,
  onSubmit,
  profile,
  filter,
  setFilter,
  onDelete,
  userId,
  doubtAnswers,
  answerForms,
  setAnswerForms,
  onLoadAnswers,
  onSubmitAnswer
}) {
  const visible = questions.filter(
    q =>
      (filter.year === 'All years' || q.year === filter.year) &&
      (filter.branch === 'All branches' || q.branch === filter.branch)
  );

  return (
    <div className="page-content">
      <PageHeading
        eyebrow="ASK · ANSWER · LEARN TOGETHER"
        title="Doubt Forum"
        description="Ask questions, help classmates, and learn across every year and branch."
      />

      <form className="panel share-form" onSubmit={onSubmit}>
        <h2>Ask a question</h2>

        <label>
          Question title
          <input
            required
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. How does binary search work?"
          />
        </label>

        <label>
          Explain your doubt
          <textarea
            required
            rows="4"
            value={form.body}
            onChange={e => setForm({ ...form, body: e.target.value })}
            placeholder="Add details so other students can help…"
          />
        </label>

        <div className="share-form-row">
          <label>
            Category
            <select
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
            >
              {['Doubt', 'DSA', 'Programming', 'Exam preparation', 'Career'].map(x =>
                <option key={x}>{x}</option>
              )}
            </select>
          </label>

          <label>
            Year
            <select
              value={form.year}
              onChange={e => setForm({ ...form, year: e.target.value })}
            >
              {['1st Year', '2nd Year', '3rd Year', '4th Year', 'All years'].map(x =>
                <option key={x}>{x}</option>
              )}
            </select>
          </label>

          <label>
            Branch
            <select
              value={form.branch}
              onChange={e => setForm({ ...form, branch: e.target.value })}
            >
              {['CSE', 'IT', 'ECE', 'EEE', 'Mechanical Engineering',
                'Civil Engineering', 'Chemical Engineering',
                'All branches', 'Other'].map(x =>
                <option key={x}>{x}</option>
              )}
            </select>
          </label>

          <button className="btn btn-primary" type="submit">
            <Send size={15} /> Post doubt
          </button>
        </div>
      </form>

      <StudentFilters filter={filter} setFilter={setFilter} />

      <div className="forum-list">
        {visible.length === 0 ? (
          <EmptyState
            icon={CircleHelp}
            title="No questions yet"
            text="Be the first to ask a question, or change the year and branch filters."
          />
        ) : (
          visible.map(q => (
            <article className="panel forum-card" key={q.id}>
              <div className="forum-meta">
                <span className="tag">{q.category || 'Doubt'}</span>
                <span>{q.year || 'All years'} · {q.branch || 'All branches'}</span>
              </div>

              <h3>{q.title}</h3>
              <p>{q.body}</p>

              <div className="forum-byline">
                <span>
                  Asked by <strong>{q.author_name || 'Student'}</strong>
                  {' · '}{new Date(q.created_at).toLocaleDateString()}
                </span>

                {q.user_id === userId && (
                  <button
                    type="button"
                    className="icon-button danger-hover"
                    onClick={() => onDelete(q)}
                    title="Delete your question"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>

              <div className="doubt-answers">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onLoadAnswers(q.id)}
                >
                  {doubtAnswers[q.id] === undefined
                    ? 'View answers'
                    : `Answers (${doubtAnswers[q.id].length})`}
                </button>

                {doubtAnswers[q.id] !== undefined && (
                  <div className="answer-list">
                    {doubtAnswers[q.id].length === 0 ? (
                      <p>No answers yet. Be the first to help!</p>
                    ) : (
                      doubtAnswers[q.id].map(a => (
                        <div className="answer-item" key={a.id}>
                          <p>{a.answer}</p>
                          <small>
                            Answered by {a.author_name || 'Student'}
                            {' · '}{new Date(a.created_at).toLocaleDateString()}
                          </small>
                        </div>
                      ))
                    )}
                  </div>
                )}

                <form onSubmit={e => onSubmitAnswer(e, q.id)}>
                  <label>
                    Write your answer
                    <textarea
                      required
                      rows="3"
                      value={answerForms[q.id] || ''}
                      onChange={e =>
                        setAnswerForms(previous => ({
                          ...previous,
                          [q.id]: e.target.value
                        }))
                      }
                      placeholder="Help this student by explaining the solution…"
                    />
                  </label>

                  <button className="btn btn-primary" type="submit">
                    <Send size={15} /> Post answer
                  </button>
                </form>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
function NotesSharingPage({notes,openNewNote,uploadNoteFile,downloadNote}) { return <div className="page-content"><PageHeading eyebrow="STUDENT RESOURCE LIBRARY" title="Notes Sharing" description="Create notes, import text notes, and download notes as text files." action={<button className="btn btn-primary" onClick={openNewNote}><Plus size={16}/> Write notes</button>}/><section className="panel upload-panel"><div><Upload size={22}/><div><h2>Upload a notes file</h2><p>Upload PDF, Word, or text documents to your personal or community library..</p></div></div><label className="btn btn-soft upload-label">Choose file<input
  type="file"
  accept=".txt,.md,.pdf,.doc,.docx,.csv"
  onChange={e => {
    uploadNoteFile(e.target.files?.[0]);
    e.target.value = '';
  }}
  hidden
/></label></section><div className="notes-grid">{notes.length===0?<EmptyState icon={FileText} title="No notes to share yet" text="Write or upload a note to begin your library."/>:notes.map(n=><article className="note-card" key={n.id}><div className="note-card-top"><span className="tag">{n.subject}</span></div><h3>{n.title}</h3><p>{n.content||'No content added yet.'}</p><div className="note-card-footer"><span><Clock3 size={13}/> {new Date(n.updated_at).toLocaleDateString()}</span><button onClick={()=>downloadNote(n)}><Download size={14}/> Download</button></div></article>)}</div><p className="sharing-note">Notes are saved to the signed-in account. For students to share the same public library, use the SQL setup included in this project and extend notes permissions intentionally.</p></div>; }

function ProfilePage({ profile, setProfile, saveProfile, saving, email }) {
  const [section, setSection] = useState('About');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityMessage, setSecurityMessage] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  async function changePassword(e) {
    e.preventDefault();
    setSecurityMessage('');

    if (newPassword.length < 8) {
      setSecurityMessage('Password kam se kam 8 characters ka hona chahiye.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setSecurityMessage('Dono passwords match nahi kar rahe.');
      return;
    }

    if (!supabase) {
      setSecurityMessage('Supabase configured nahi hai.');
      return;
    }

    setPasswordLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    setPasswordLoading(false);

    if (error) {
      setSecurityMessage('Password change nahi hua: ' + error.message);
      return;
    }

    setNewPassword('');
    setConfirmPassword('');
    setSecurityMessage('Password successfully change ho gaya!');
  }

  return (
    <div className="page-content">
      <PageHeading
        eyebrow="YOUR ACCOUNT"
        title="My Profile"
        description="Manage your profile, learn about StudySpace, and protect your account."
      />

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
        {['About', 'Privacy', 'Security', 'Personal Details'].map((item) => (
          <button
            key={item}
            type="button"
            className={section === item ? 'btn btn-primary' : 'btn'}
            onClick={() => {
              setSection(item);
              setSecurityMessage('');
            }}
          >
            {item}
          </button>
        ))}
      </div>
      

      {section === 'Privacy' && (
        <section className="panel">
          <h2>Privacy</h2>
          <p>
            Your account information and personal notes should remain private
            to your account. Notes you choose to share with the community may
            be visible to other students.
          </p>
          <h3>Keep your account safe</h3>
          <ul>
            <li>Do not share your password with anyone.</li>
            <li>Check whether a note is private or shared before publishing.</li>
            <li>Only upload files you are allowed to share.</li>
            <li>Sign out when using a shared computer.</li>
          </ul>
          <p>
            Privacy depends on the app's database and storage access policies.
            These settings should be reviewed before claiming that all data
            is fully private.
          </p>
        </section>
      )}

      {section === 'Security' && (
        <section className="panel">
          <h2>Change Password</h2>
          <p>Enter your new password below. Use at least 8 characters.</p>

          <form onSubmit={changePassword}>
            <label>
              New password
              <input
                type="password"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
                minLength={8}
              />
            </label>

            <label>
              Confirm new password
              <input
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                required
                minLength={8}
              />
            </label>

            {securityMessage && <p role="status">{securityMessage}</p>}

            <button
              className="btn btn-primary"
              type="submit"
              disabled={passwordLoading}
            >
              {passwordLoading ? 'Updating...' : 'Change Password'}
            </button>
          </form>
        </section>
      )}

      {section === 'Personal Details' && (
        <>
          <section className="profile-hero">
            <div className="profile-avatar-large">
              {(profile.full_name || email || 'S').slice(0, 1).toUpperCase()}
            </div>
            <div>
              <h2>{profile.full_name || 'Student profile'}</h2>
              <p>{email}</p>
              <span className="verified-pill">
                <ShieldCheck size={14} /> Signed in
              </span>
            </div>
          </section>

          <form className="panel profile-form" onSubmit={saveProfile}>
            <div className="panel-heading">
              <div>
                <h2>Personal details</h2>
                <p>Your student details are saved to your account.</p>
              </div>
            </div>

            <label>
              Full name
              <input
                value={profile.full_name || ''}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Course / department
              <select
                value={profile.course || 'CSE'}
                onChange={(e) => setProfile({ ...profile, course: e.target.value })}
              >
                {['CSE', 'IT', 'ECE', 'Electrical Engineering', 'Mechanical Engineering', 'Other'].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label>
              Year of study
              <select
                value={profile.year || '2nd Year'}
                onChange={(e) => setProfile({ ...profile, year: e.target.value })}
              >
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </label>

            <label>
              Branch
              <select
                value={profile.branch || profile.course || 'CSE'}
                onChange={(e) => setProfile({
                  ...profile,
                  branch: e.target.value,
                  course: e.target.value
                })}
              >
                {['CSE', 'IT', 'ECE', 'EEE', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Other'].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label>
              Email address
              <input value={email || ''} disabled readOnly />
            </label>

            <div className="profile-save-row">
              <span><ShieldCheck size={15} /> Private to your account</span>
              <button className="btn btn-primary" disabled={saving}>
                <Save size={16} />
                {saving ? 'Saving...' : 'Save profile'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
function QuizRunner({quizItems,quizIndex,setQuizIndex,answers,setAnswers,quizFinished,finishQuiz,score,setPage,startQuiz,topic,totalAnswered}) {
  if (!quizItems.length) return <div className="page-content"><EmptyState icon={Brain} title="No questions in this session" text="Choose a topic and start again." action={<button className="btn btn-primary" onClick={()=>setPage('Quiz Zone')}>Back to quiz zone</button>}/></div>;
  if (quizFinished) {
    const pct=Math.round(score/quizItems.length*100);
    return <div className="page-content quiz-result-wrap"><div className="result-card"><div className="result-icon">{pct>=80?'🏆':pct>=50?'🌟':'🌱'}</div><span className="eyebrow">SESSION COMPLETE</span><h1>{pct>=80?'Fantastic work!':pct>=50?'Good progress!':'Keep growing!'}</h1><p>Every answer teaches you something. Review your results and try again.</p><div className="result-score">{score}<span>/{quizItems.length}</span></div><div className="result-meter"><span style={{width:`${pct}%`}}/></div><strong className="result-percent">{pct}% score</strong><div className="result-stats"><div><span>Correct</span><strong>{score}</strong></div><div><span>Incorrect</span><strong>{quizItems.length-score}</strong></div><div><span>Answered</span><strong>{totalAnswered}</strong></div></div><div className="result-actions"><button className="btn btn-primary" onClick={()=>startQuiz(topic)}>Try another quiz <ArrowRight size={16}/></button><button className="btn btn-ghost" onClick={()=>setPage('My Progress')}>View progress</button></div></div><section className="panel answer-review"><div className="panel-heading"><div><h2>Answer review</h2><p>Review the explanation for each question.</p></div></div>{quizItems.map((q,i)=><div className="review-item" key={q.id}><div className={`review-mark ${answers[i]===q.a?'right':'wrong'}`}>{answers[i]===q.a?<Check size={15}/>:<X size={15}/>}</div><div><strong>{q.q}</strong><p className="review-answer">Your answer: {answers[i]===undefined?'Not answered':q.options[answers[i]]}</p><p className="review-correct">Correct answer: {q.options[q.a]}</p><p>{q.explanation}</p></div></div>)}</section></div>;
  }
  const q=quizItems[quizIndex];
  return <div className="page-content quiz-runner-wrap"><div className="quiz-runner-top"><button className="text-link" onClick={()=>setPage('Quiz Zone')}>← Exit quiz</button><span>{topic==='All'?'Mixed practice':topic} · Question {quizIndex+1} of {quizItems.length}</span></div><div className="quiz-progress-track"><span style={{width:`${(quizIndex+1)/quizItems.length*100}%`}}/></div><div className="quiz-question-card"><div className="question-label"><span>QUESTION {String(quizIndex+1).padStart(2,'0')}</span><span className="tag tag-dsa">{q.topic}</span></div><h1>{q.q}</h1><p className="question-subtitle">Choose the best answer to continue.</p><div className="answer-options">{q.options.map((opt,i)=><button key={opt} className={`answer-option ${answers[quizIndex]===i?'chosen':''}`} onClick={()=>setAnswers({...answers,[quizIndex]:i})}><span className="option-letter">{String.fromCharCode(65+i)}</span><span>{opt}</span>{answers[quizIndex]===i&&<Check className="option-check" size={17}/>}</button>)}</div><div className="question-footer"><span>{Object.keys(answers).length} of {quizItems.length} answered</span><button className="btn btn-primary" disabled={answers[quizIndex]===undefined} onClick={()=>quizIndex<quizItems.length-1?setQuizIndex(quizIndex+1):finishQuiz()}>{quizIndex===quizItems.length-1?'Finish quiz':'Next question'} <ArrowRight size={16}/></button></div></div><div className="question-dots">{quizItems.map((item,i)=><button key={item.id} title={`Question ${i+1}`} className={`${i===quizIndex?'current':''} ${answers[i]!==undefined?'answered':''}`} onClick={()=>setQuizIndex(i)}>{i+1}</button>)}</div></div>;
}
export default App;
function PYQLibraryPage({ session, profile, setNotice }) {
  const [papers, setPapers] = useState([]);
  const [semester, setSemester] = useState('1');
  const [subject, setSubject] = useState('');
  const [examYear, setExamYear] = useState('2025');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [semesterFilter, setSemesterFilter] = useState('All');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  async function loadPapers() {
    const { data, error } = await supabase
      .from('pyq_papers')
      .select('*')
      .order('semester')
      .order('subject')
      .order('exam_year', { ascending: false });

    if (error) {
      setNotice('Question papers load nahi hue: ' + error.message);
      return;
    }

    setPapers(data || []);
  }

  useEffect(() => {
    loadPapers();
  }, []);

  async function uploadPaper(event) {
    event.preventDefault();

    if (!session?.user) {
      setNotice('Pehle login karo.');
      return;
    }

    if (!subject.trim() || !file) {
      setNotice('Subject aur PDF file select karo.');
      return;
    }

    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setNotice('Sirf PDF question paper upload karo.');
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      setNotice('PDF file 20 MB se chhoti honi chahiye.');
      return;
    }

    setLoading(true);

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `${session.user.id}/${crypto.randomUUID()}-${safeName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('studyspace-pyqs')
        .upload(path, file, {
          upsert: false,
          contentType: 'application/pdf'
        });

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase
        .from('pyq_papers')
        .insert({
          title: title.trim() || file.name.replace(/\.pdf$/i, ''),
          semester: Number(semester),
          subject: subject.trim(),
          exam_year: Number(examYear),
          file_path: path,
          file_name: file.name,
          uploaded_by: session.user.id,
          uploader_name: profile?.full_name || session.user.email
        });

      if (insertError) {
        await supabase.storage.from('studyspace-pyqs').remove([path]);
        throw insertError;
      }

      setNotice('PYQ paper successfully upload ho gaya!');
      setTitle('');
      setSubject('');
      setExamYear('2025');
      setFile(null);
      event.target.reset();
      await loadPapers();
    } catch (error) {
      setNotice('Upload failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function downloadPaper(paper) {
    const { data, error } = await supabase.storage
      .from('studyspace-pyqs')
      .download(paper.file_path);

    if (error || !data) {
      setNotice('Download failed: ' + (error?.message || 'File nahi mili.'));
      return;
    }

    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = paper.file_name || 'question-paper.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const filteredPapers = papers.filter((paper) => {
    const matchesSemester =
      semesterFilter === 'All' ||
      String(paper.semester) === semesterFilter;

    const matchesSubject = paper.subject
      .toLowerCase()
      .includes(subjectFilter.trim().toLowerCase());

    const matchesYear =
      yearFilter === 'All' ||
      String(paper.exam_year) === yearFilter;

    return matchesSemester && matchesSubject && matchesYear;
  });

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>PYQ Library</h1>
          <p>Semester-wise previous year question papers share aur download karo.</p>
        </div>
      </div>

      <section className="panel">
        <h2>Upload Question Paper</h2>

        <form onSubmit={uploadPaper} className="share-form">
          <label>
            Semester
            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </select>
          </label>

          <label>
            Subject
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Data Structures"
              required
            />
          </label>

          <label>
            Exam Year
            <select value={examYear} onChange={(e) => setExamYear(e.target.value)}>
              {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>

          <label>
            Paper Title (optional)
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. End Semester Exam"
            />
          </label>

          <label>
            PDF Question Paper
            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload PYQ'}
          </button>
        </form>
      </section>

      <section className="panel">
        <h2>Available Question Papers</h2>

        <div className="share-form">
          <label>
            Filter by Semester
            <select
              value={semesterFilter}
              onChange={(e) => setSemesterFilter(e.target.value)}
            >
              <option value="All">All Semesters</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </select>
          </label>

          <label>
            Search Subject
            <input
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              placeholder="Search subject..."
            />
          </label>

          <label>
            Filter by Year
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value="All">All Years</option>
              {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>
        </div>

        {filteredPapers.length === 0 ? (
          <p>No question papers found. Pehla PDF upload kar sakte ho.</p>
        ) : (
          <div>
            {filteredPapers.map((paper) => (
              <div className="panel" key={paper.id}>
                <h3>{paper.title}</h3>
                <p>
                  Semester {paper.semester} · {paper.subject} · {paper.exam_year}
                </p>
                <p>Uploaded by: {paper.uploader_name || 'Student'}</p>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => downloadPaper(paper)}
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}