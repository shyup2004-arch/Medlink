document.addEventListener('DOMContentLoaded', function() {
    // --- App Version ---
    const APP_VERSION = "v3.4 (Firestore)";

    // --- Global State ---
    let lectureData = [];
    let questionData = [];
    let latestLectureData = null;

    // --- DOM Elements ---
    const archiveList = document.getElementById('archive-list');
    const chapterSelect = document.getElementById('chapter-select');
    // ... (other DOM elements are the same)
    const latestReviewContent = document.getElementById('latest-review-content');

    // --- App Initialization ---
    function initializeApp() {
        document.getElementById('app-version').textContent = APP_VERSION;
        
        try {
            firebase.initializeApp(firebaseConfig);
            const firestore = firebase.firestore();
            loadDataFromFirestore(firestore);
        } catch (e) {
            displayError(`[오류] Firebase 초기화 실패: ${e.message}`);
        }
    }

    async function loadDataFromFirestore(firestore) {
        try {
            const lecturesSnapshot = await firestore.collection('lectures').orderBy('id').get();
            lecturesSnapshot.forEach(doc => lectureData.push(doc.data()));

            const questionsSnapshot = await firestore.collection('questions').get();
            questionsSnapshot.forEach(doc => questionData.push(doc.data()));
            
            // For now, latestLecture is disabled until new content is added
            // const latestLectureSnapshot = await firestore.collection('utils').doc('latestLecture').get();
            // if (latestLectureSnapshot.exists) {
            //     latestLectureData = latestLectureSnapshot.data();
            // }

            if (lectureData.length === 0) {
                 displayError("[오류] Firestore에서 강의 데이터를 찾을 수 없습니다. 데이터가 업로드되었는지 확인해주세요.");
                 return;
            }

            // Render content now that we have data
            renderLatestReview();
            renderArchive();
            populateChapterSelect();
        } catch (error) {
            console.error(error);
            displayError(`[오류] 데이터 로딩 중 문제가 발생했습니다: ${error.message}`);
        }
    }
    
    function displayError(errorMessage) {
        const errorHtml = `<p style='color: red; font-weight: bold;'>${errorMessage}</p>`;
        archiveList.innerHTML = errorHtml;
        latestReviewContent.innerHTML = errorHtml;
    }

    // --- Core Functions (No changes from here on) ---
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content) {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    }
    
    function renderLatestReview() {
        if (latestLectureData) {
            let quizHTML = (latestLectureData.reviewQuiz || []).map((quiz, index) => `<div class="question-item" style="padding: 10px; margin-top: 15px;"><div class="question-title"><span>Q${index + 1}. ${quiz.question}</span></div><div class="content"><pre>${quiz.answer}</pre></div></div>`).join('');
            latestReviewContent.innerHTML = `<h4><strong>${latestLectureData.title}</strong> (${latestLectureData.professor})</h4><div class="summary-box">${latestLectureData.summary}</div><h4 style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;"><strong>🎯 핵심 확인 퀴즈</strong></h4>${quizHTML}`;
        } else {
            latestReviewContent.innerHTML = '<p>새로운 강의 자료가 추가되면 여기에 표시됩니다.</p>';
        }
    }

    function renderArchive(filter = '') {
        archiveList.innerHTML = '';
        const query = filter.toLowerCase();
        let dataToRender = lectureData;
        if (query) {
            dataToRender = lectureData.filter(l => l.title.toLowerCase().includes(query) || l.professor.toLowerCase().includes(query));
        }
        if (dataToRender.length > 0) {
             if (query) archiveList.innerHTML += '<h3>관련 강의</h3>';
             dataToRender.forEach(lecture => {
                const summaryContent = lecture.summary ? `<div class="summary-box">${lecture.summary}</div>` : `<p><i>- 향후 강의자료 요약 내용으로 채워집니다. -</i></p>`;
                const item = document.createElement('div');
                item.className = 'lecture-item';
                item.innerHTML = `<div class="lecture-title"><span>${lecture.title}</span><span class="professor-tag">${lecture.professor}</span></div><div class="content">${summaryContent}</div>`;
                archiveList.appendChild(item);
            });
        }
        if (query) {
            const matchingQuestions = questionData.filter(q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query) || q.professor.toLowerCase().includes(query));
            if (matchingQuestions.length > 0) {
                archiveList.innerHTML += '<h3 style="margin-top:20px;">관련 문제</h3>';
                matchingQuestions.forEach(q => {
                    const item = document.createElement('div');
                    item.className = 'question-item';
                    item.innerHTML = `<div class="question-title"><span>${q.question}</span><span class="professor-tag">${q.professor} (${q.exam})</span></div><div class="content"><pre>${q.answer}</pre></div>`;
                    archiveList.appendChild(item);
                });
            }
        }
        if (archiveList.innerHTML === '') {
            archiveList.innerHTML = query ? '<p>검색 결과가 없습니다.</p>' : '<p>강의 자료가 없습니다.</p>';
        }
    }

    function populateChapterSelect() {
        chapterSelect.innerHTML = '<option value="all">전체 단원</option>';
        lectureData.forEach(lecture => {
            const option = document.createElement('option');
            option.value = lecture.id;
            option.textContent = lecture.title;
            chapterSelect.appendChild(option);
        });
    }

    function displayQuestionsInModal(questions, title) {
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        modalTitle.textContent = title;
        modalBody.innerHTML = '';
        const isMyQuiz = (title === '나만의 문제집');
        document.getElementById('save-questions-btn').style.display = isMyQuiz ? 'none' : 'block';
        if (questions.length === 0) {
            modalBody.innerHTML = '<p>표시할 문제가 없습니다.</p>';
            if (isMyQuiz) setTimeout(() => modal.style.display = 'none', 1000);
        } else {
            questions.forEach((q, index) => {
                const item = document.createElement('div');
                item.className = 'question-item';
                item.dataset.id = q.id;
                item.innerHTML = `<div class="question-title"><label style="display: flex; align-items: center; width: 100%; font-weight: normal; cursor: pointer;"><input type="checkbox" class="save-checkbox" style="${isMyQuiz ? 'display:none;' : ''}"><span style="margin-left: ${isMyQuiz ? '0' : '10px'};">${index + 1}. ${q.question}</span></label><div style="display:flex; align-items:center; flex-shrink: 0;">${isMyQuiz ? `<button class="remove-btn">삭제</button>` : ''}<span class="professor-tag">${q.professor} (${q.exam})</span></div></div><div class="content"><pre>${q.answer}</pre></div>`;
                modalBody.appendChild(item);
            });
        }
        document.getElementById('quiz-modal').style.display = 'block';
    }

    function removeQuestionFromMyQuiz(questionId) {
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        savedIds = savedIds.filter(id => id !== questionId);
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        const savedQuestions = questionData.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '나만의 문제집');
    }

    function switchView(targetId) {
        const views = document.querySelectorAll('.view');
        const navLinks = document.querySelectorAll('.nav-link');
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(targetId);
        if (targetView) targetView.classList.add('active-view');
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if(navLink.dataset.target === targetId) {
                navLink.classList.add('active');
                if (navLink.parentElement.classList.contains('nav-submenu')) {
                    navLink.closest('.nav-group').open = true;
                }
            }
        });
    }
    
    function toggleSidebar(forceOpen) {
        const sidebar = document.getElementById('sidebar');
        if (typeof forceOpen === 'boolean') {
            sidebar.classList.toggle('open', forceOpen);
        } else {
            sidebar.classList.toggle('open');
        }
    }

    // --- Event Listeners Setup ---
    document.body.addEventListener('click', function(e) {
        const title = e.target.closest('.lecture-title, .question-title');
        if (title) toggleContent(title);
    });

    document.getElementById('modal-body').addEventListener('click', function(e) {
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            e.stopPropagation();
            const questionId = parseInt(e.target.closest('.question-item').dataset.id);
            removeQuestionFromMyQuiz(questionId);
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.tagName === 'A') {
                e.preventDefault();
                const targetId = link.dataset.target;
                if(targetId) switchView(targetId);
                if (window.innerWidth < 768) toggleSidebar(false);
            }
        });
    });
    
    document.getElementById('sidebar-open-btn').addEventListener('click', () => toggleSidebar(true));
    document.getElementById('sidebar-close-btn').addEventListener('click', () => toggleSidebar(false));

    document.getElementById('generate-bank-btn').addEventListener('click', () => {
        const chapterId = document.getElementById('chapter-select').value;
        const questions = (chapterId === 'all') ? questionData : questionData.filter(q => q.chapter.includes(parseInt(chapterId)));
        const title = (chapterId === 'all') ? '전체 단원 문제은행' : `${lectureData.find(l => l.id == chapterId).title} 문제은행`;
        displayQuestionsInModal(questions, title);
    });
    document.getElementById('generate-mock-btn').addEventListener('click', () => {
        const count = parseInt(document.getElementById('mock-exam-count').value);
        const shuffled = [...questionData].sort(() => 0.5 - Math.random());
        displayQuestionsInModal(shuffled.slice(0, count), `총괄 모의고사 (${count}문제)`);
    });
    
    document.getElementById('show-my-quiz-btn').addEventListener('click', () => {
        const savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        if (savedIds.length === 0) {
            alert("'나만의 문제집'이 비어있습니다."); return;
        }
        const savedQuestions = questionData.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '나만의 문제집');
    });

    document.getElementById('save-questions-btn').addEventListener('click', () => {
        const checkboxes = document.getElementById('modal-body').querySelectorAll('.save-checkbox:checked');
        if (checkboxes.length === 0) {
            alert('저장할 문제를 선택해주세요.'); return;
        }
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        checkboxes.forEach(cb => {
            const id = parseInt(cb.closest('.question-item').dataset.id);
            if (!savedIds.includes(id)) savedIds.push(id);
        });
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        alert(`${checkboxes.length}개의 문제가 '나만의 문제집'에 저장되었습니다.`);
        checkboxes.forEach(cb => cb.checked = false);
    });
    
    document.getElementById('search-input').addEventListener('input', () => {
        const query = document.getElementById('search-input').value;
        switchView('archive-view');
        renderArchive(query);
    });

    document.getElementById('close-modal').addEventListener('click', () => document.getElementById('quiz-modal').style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === document.getElementById('quiz-modal')) document.getElementById('quiz-modal').style.display = 'none'; });

    // --- Initial Load ---
    initializeApp();
});