const latestLectureData = {
    "title": "Chapter 1: An Overview of Cells & Cell Research",
    "professor": "김성찬",
    "summary": "이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다. 전체적인 흐름은 '세포란 무엇인가?'에서 시작하여 '세포를 어떻게 연구하는가?'로 이어집니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>세포 이론(Cell Theory):</strong> 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.</li><li><strong>원핵/진핵 구분:</strong> 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (<strong>Eukaryotic / Prokaryotic</strong>)</li></ul><div class=\"diagram\"><strong>DNA</strong><span class=\"arrow\">→ Transcription →</span><strong>RNA</strong><span class=\"arrow\">→ Translation →</span><strong>Protein</strong><br><small>(중심 원리 - Central Dogma)</small></div><p style=\"margin-top: 5px;\">* RNA에서 DNA로 가는 <strong>역전사(Reverse transcription)</strong> 과정도 매우 중요합니다.</p><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>결합 조직(Connective tissue):</strong> 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함. <span class=\"text-red\">2023년 1차 시험 출제!</span> 종류 암기 필수.</li><li><strong>유도만능줄기세포(iPS cells):</strong> 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. <span class=\"text-red\">2023년 1차 시험 출제!</span> 정의를 정확히 알아두세요.</li></ul><h4>🧪 주요 연구 기법</h4><ul><li>세포 관찰을 위한 <strong>현미경(Microscopy)</strong></li><li>세포를 키우는 <strong>세포 배양(Cell culture)</strong></li><li>연구에 사용되는 <strong>모델 생물(Model organisms)</strong>의 종류와 특징</li></ul>",
    "reviewQuiz": [
        { "question": "세포를 구조와 복잡성에 따라 나누는 두 가지 주요 유형은 무엇인가요?", "answer": "원핵세포(Prokaryotic cells)와 진핵세포(Eukaryotic cells)" },
        { "question": "RNA를 주형으로 사용하여 DNA를 합성하는 과정을 무엇이라고 하나요?", "answer": "역전사 (Reverse transcription)" },
        { "question": "성인의 체세포를 재프로그래밍하여 만드는 배아줄기세포와 유사한 만능 줄기세포를 무엇이라고 하나요?", "answer": "유도만능줄기세포 (iPS cells - induced pluripotent stem cells)" }
    ]
};

const lectureData = [
    { 
        "id": 1, 
        "title": "Ch.1: An Overview of Cells and Cell Research", 
        "professor": "김성찬",
        "summary": "이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다. 전체적인 흐름은 '세포란 무엇인가?'에서 시작하여 '세포를 어떻게 연구하는가?'로 이어집니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>세포 이론(Cell Theory):</strong> 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.</li><li><strong>원핵/진핵 구분:</strong> 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (<strong>Eukaryotic / Prokaryotic</strong>)</li></ul><div class=\"diagram\"><strong>DNA</strong><span class=\"arrow\">→ Transcription →</span><strong>RNA</strong><span class=\"arrow\">→ Translation →</span><strong>Protein</strong><br><small>(중심 원리 - Central Dogma)</small></div><p style=\"margin-top: 5px;\">* RNA에서 DNA로 가는 <strong>역전사(Reverse transcription)</strong> 과정도 매우 중요합니다.</p><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>결합 조직(Connective tissue):</strong> 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함. <span class=\"text-red\">2023년 1차 시험 출제!</span> 종류 암기 필수.</li><li><strong>유도만능줄기세포(iPS cells):</strong> 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. <span class=\"text-red\">2023년 1차 시험 출제!</span> 정의를 정확히 알아두세요.</li></ul><h4>🧪 주요 연구 기법</h4><ul><li>세포 관찰을 위한 <strong>현미경(Microscopy)</strong></li><li>세포를 키우는 <strong>세포 배양(Cell culture)</strong></li><li>연구에 사용되는 <strong>모델 생물(Model organisms)</strong>의 종류와 특징</li></ul>"
    },
    { "id": 2, "title": "Ch.2: Molecules and Membrane", "professor": "김재봉", "summary": "" },
    // ... (The rest of the lectureData and questionData is the same as before) ...
];

const questionData = [
    { "id": 101, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "A ( ) segment of DNA that is expressed to yield a functional product. (e.g., rRNA, tRNA or a polypeptide)", "answer": "gene" },
    // ... (The rest of the questionData is the same as before) ...
    { "id": 1102, "chapter": [20], "professor": "이규영", "exam": "4차", "question": "악성 골 종양(malignant bone tumor)이 속하는 암의 종류는?", "answer": "2. Sarcomas (육종)" }
];