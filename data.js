const latestLectureData = {
    "title": "Chapter 1: Overview of Cells & Cell Research",
    "professor": "김성찬",
    "summary": `이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다. 전체적인 흐름은 '세포란 무엇인가?'에서 시작하여 '세포를 어떻게 연구하는가?'로 이어집니다.

- **핵심 암기 사항:**
  - **세포 이론(Cell Theory):** 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.
  - **원핵/진핵 구분:** 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (Eukaryotic / Prokaryotic)
  - **중심 원리(Central Dogma):** DNA →(Transcription)→ RNA →(Translation)→ Protein. RNA에서 DNA로 가는 **역전사(Reverse transcription)** 과정도 매우 중요.

- **[!!] 기출 연관 중요 개념:**
  - **결합 조직(Connective tissue):** 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함하는 조직. 2023년 1차 시험에서 출제되었습니다. 종류를 꼭 암기하세요.
  - **유도만능줄기세포(iPS cells):** 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. 정의와 개념을 묻는 문제가 2023년 1차 시험에 출제될 만큼 중요한 토픽입니다.

- **주요 연구 기법:**
  - 세포를 관찰하는 **현미경(Microscopy)**, 세포를 키우는 **세포 배양(Cell culture)**, 그리고 연구에 사용되는 **모델 생물(Model organisms)**의 종류와 특징을 알아두어야 합니다.`,
    "reviewQuiz": [
        { "question": "세포를 구조와 복잡성에 따라 나누는 두 가지 주요 유형은 무엇인가요?", "answer": "원핵세포(Prokaryotic cells)와 진핵세포(Eukaryotic cells)" },
        { "question": "RNA를 주형으로 사용하여 DNA를 합성하는 과정을 무엇이라고 하나요?", "answer": "역전사 (Reverse transcription)" },
        { "question": "성인의 체세포를 재프로그래밍하여 만드는 배아줄기세포와 유사한 만능 줄기세포를 무엇이라고 하나요?", "answer": "유도만능줄기세포 (iPS cells - induced pluripotent stem cells)" }
    ]
};

const lectureData = [
    { 
        "id": 1, 
        "title": "Chapter 1: Overview of Cells & Cell Research", 
        "professor": "김성찬",
        "summary": `이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다. 전체적인 흐름은 '세포란 무엇인가?'에서 시작하여 '세포를 어떻게 연구하는가?'로 이어집니다.

- **핵심 암기 사항:**
  - **세포 이론(Cell Theory):** 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.
  - **원핵/진핵 구분:** 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (Eukaryotic / Prokaryotic)
  - **중심 원리(Central Dogma):** DNA →(Transcription)→ RNA →(Translation)→ Protein. RNA에서 DNA로 가는 **역전사(Reverse transcription)** 과정도 매우 중요.

- **[!!] 기출 연관 중요 개념:**
  - **결합 조직(Connective tissue):** 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함하는 조직. 2023년 1차 시험에서 출제되었습니다. 종류를 꼭 암기하세요.
  - **유도만능줄기세포(iPS cells):** 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. 정의와 개념을 묻는 문제가 2023년 1차 시험에 출제될 만큼 중요한 토픽입니다.

- **주요 연구 기법:**
  - 세포를 관찰하는 **현미경(Microscopy)**, 세포를 키우는 **세포 배양(Cell culture)**, 그리고 연구에 사용되는 **모델 생물(Model organisms)**의 종류와 특징을 알아두어야 합니다.`
    },
    { "id": 2, "title": "Chapter 2: Molecules and Membranes", "professor": "김재봉", "summary": "" },
    { "id": 3, "title": "Chapter 3: Bioenergetics and Metabolism", "professor": "김재봉", "summary": "" },
    { "id": 4, "title": "Chapter 4: Fundamentals of Molecular Biology", "professor": "김성찬", "summary": "" },
    { "id": 5, "title": "Chapter 5, 6: Cellular Genomes & Bioinformatics", "professor": "김성찬", "summary": "" },
    { "id": 7, "title": "Chapter 7: Replication and Repair", "professor": "이규영", "summary": "" },
    { "id": 8, "title": "Chapter 8, 9: RNA Synthesis and Processing", "professor": "김재봉", "summary": "" },
    { "id": 10, "title": "Chapter 10: Protein Synthesis, Processing, Regulation", "professor": "조현주 (예정)", "summary": "" },
    { "id": 11, "title": "Chapter 11: The Nucleus", "professor": "이규영", "summary": "" },
    { "id": 12, "title": "Chapter 12: Protein Sorting and Transport", "professor": "김성찬", "summary": "" },
    { "id": 13, "title": "Chapter 13: Mitochondria and Peroxisomes", "professor": "김성찬", "summary": "" },
    { "id": 14, "title": "Chapter 14: The Cytoskeleton and Cell Movement", "professor": "조현주 (예정)", "summary": "" },
    { "id": 15, "title": "Chapter 15: The Plasma Membrane", "professor": "조현주 (예정)", "summary": "" },
    { "id": 16, "title": "Chapter 16: Cell Wall and Interaction", "professor": "조현주 (예정)", "summary": "" },
    { "id": 17, "title": "Chapter 17: Cell Signaling", "professor": "김재봉", "summary": "" },
    { "id": 18, "title": "Chapter 18: The Cell Cycle", "professor": "이규영", "summary": "" },
    { "id": 19, "title": "Chapter 19: Cell Death and Renewal", "professor": "김재봉", "summary": "" },
    { "id": 20, "title": "Chapter 20: Cancer", "professor": "이규영", "summary": "" }
];

const questionData = [
    { "id": 101, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "A ( ) segment of DNA that is expressed to yield a functional product. (e.g., rRNA, tRNA or a polypeptide)", "answer": "gene" },
    { "id": 102, "chapter": [1], "professor": "김성찬", "exam": "1차", "question": "( ) include bone(osteoblast), cartilage(chondrocyte), and adipose (adipocyte) tissue.", "answer": "Connective tissue" },
    { "id": 103, "chapter": [1], "professor": "김성찬", "exam": "1차", "question": "() are a type of pluripotent stem cell derived from adult somatic cells that have been genetically reprogrammed to an embryonic stem cell-like state...", "answer": "IPS (induced pluripotent stem cells)" },
    { "id": 104, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "() is the synthesis of DNA from RNA. ( ) is enzyme used to generate cDNA from RNA template.", "answer": "Reverse transcription, Reverse transcriptase" },
    { "id": 105, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "() is a method for introducing DNA into animal cells. ( ) are lipid vesicles that can incorporate DNA and fuse with plasma membrane.", "answer": "Transfection, Liposomes" },
    { "id": 106, "chapter": [5, 8], "professor": "김성찬", "exam": "1차", "question": "( ) that control transcription of a gene may be located up to hundreds of kilobases away from the gene...", "answer": "Transcription Regulatory Elements" },
    { "id": 107, "chapter": [8], "professor": "김성찬", "exam": "1차", "question": "() occurs when exons of a gene are joined in different combinations, resulting in the synthesis of different proteins from the same gene.", "answer": "Alternative splicing" },
    { "id": 108, "chapter": [5], "professor": "김성찬", "exam": "1차", "question": "() and ( ) are transposable elements... Both are retrotransposons-their transposition is mediated by reverse transcription.", "answer": "LINE, SINE" },
    { "id": 201, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "Glu의 구조식을 그리시오.", "answer": "Glutamic acid (Glu) E\nCOO-\n|\nCH2\n|\nCH2\n|\nH3N+ - C - H\n|\nCOO-" },
    { "id": 202, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "β-glucose의 구조식을 그리시오.", "answer": "β-D-glucose의 고리 구조. 1번 탄소의 OH기가 고리 평면 위(axial)에 위치합니다." },
    { "id": 203, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "phosphatidyl serine의 구조식을 그리시오.", "answer": "글리세롤 골격에 두 개의 지방산과 인산기가 결합하고, 인산기에는 세린(serine)이 결합한 구조입니다." },
    { "id": 204, "chapter": [3], "professor": "김재봉", "exam": "1차", "question": "α-ketoglutarate의 구조식을 그리시오.", "answer": "5탄소 디카르복실산으로, 2번 탄소에 케톤 그룹이 있는 구조입니다.\nCOO-\n|\nC=O\n|\nCH2\n|\nCH2\n|\nCOO-" },
    { "id": 205, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "주로 수소결합(hydrogen bond)을 사용하여 분자의 안정성을 높이는 우리 몸을 구성하는 핵심물질 3가지를 적으시오.", "answer": "물(water), 단백질(protein), 핵산(nucleic acid)" },
    { "id": 301, "chapter": [7, 8], "professor": "김재봉", "exam": "2차", "question": "DNA polymerase와 RNA polymerase의 공통된 성질 두 가지와 서로 다른 특이적 성격은 무엇인가? (한 가닥/두 가닥 및 서로 다른 nucleotide 사용하는 성질 제외)", "answer": "공통점:\n1. 5'에서 3' 방향으로 합성 진행\n2. DNA template을 필요로 함\n\n차이점:\nDNA polymerase는 primer가 필요하지만, RNA polymerase는 primer 없이 합성이 가능 (de novo synthesis)" },
    { "id": 302, "chapter": [8], "professor": "김재봉", "exam": "2차", "question": "lac operon에서 negative control과 positive control은 그 조절을 관여하는 (a: protein)에 의해 결정된다. 이 둘에 관여하는 단백질의 이름과 각각의 element에 결합하여 활성을 조절하는 조절인자를 쓰시오.", "answer": "Negative control: repressor, 조절인자: allolactose\nPositive control: CAP, 조절인자: cAMP" },
    { "id": 401, "chapter": [10], "professor": "박재봉", "exam": "2차", "question": "단백질 분해를 조절하는 단백질은 무엇인가?", "answer": "4. ubiquitin" },
    { "id": 402, "chapter": [10, 17], "professor": "박재봉", "exam": "2차", "question": "단백질 인산화와 가장 거리가 먼 것은?", "answer": "5. lysine (인산화는 주로 Serine, Threonine, Tyrosine에서 일어남)" },
    { "id": 501, "chapter": [7], "professor": "이규영", "exam": "2차", "question": "DNA 복제에 관해 옳은 것은?", "answer": "4. leading strand와 lagging strand 모두 DNA 합성을 위해 primer strand를 필요로 한다." },
    { "id": 502, "chapter": [7], "professor": "이규영", "exam": "2차", "question": "PCNA의 역할로 알맞은 것은?", "answer": "2. DNA polymerase 활성 보조 (sliding clamp 역할)" },
    { "id": 601, "chapter": [12], "professor": "김성찬", "exam": "3차", "question": "ER과 golgi를 거쳐서 sorting 되는 단백질들의 최종 목적지는 어디인가? (*3가지 답하기)", "answer": "plasma membrane, secretory vesicle, lysosome" },
    { "id": 602, "chapter": [13], "professor": "김성찬", "exam": "3차", "question": "In the liver, (peroxisomes) is involved in synthesis of bile acids from cholesterol.", "answer": "peroxisomes" },
    { "id": 701, "chapter": [14], "professor": "박재봉", "exam": "3차", "question": "항암제 taxol의 기능으로 옳은 것은?", "answer": "2. MT(Microtubule) polymer를 안정화시킨다. (분해를 억제하여 세포 분열을 막음)" },
    { "id": 801, "chapter": [11], "professor": "이규영", "exam": "3차", "question": "nucleus에 대한 설명으로 옳은 것은?", "answer": "3. mRNA processing이 일어나는 곳이다." },
    { "id": 901, "chapter": [17], "professor": "김재봉", "exam": "4차", "question": "Intracellular receptor에 반응하는 small hydrophobic molecule 4종류는?", "answer": "Steroid hormones, Thyroid hormones, Vitamin D3, Retinoic acids" },
    { "id": 902, "chapter": [17], "professor": "김재봉", "exam": "4차", "question": "Ras/Raf/MEK/ERK pathway의 구성 요소를 순서대로 나열하시오. (핵 내부 전사인자 포함)", "answer": "Ras -> Raf -> MEK -> ERK -> Elk-1" },
    { "id": 1001, "chapter": [16], "professor": "박재봉", "exam": "4차", "question": "Neutrophil과 macrophage가 혈관 밖으로 이동하는 과정(extravasation)에 대한 설명으로 옳지 않은 것은?", "answer": "5. Cadherin이 이 세포들과 주변의 세포들을 이어주어 이동을 촉진시킨다. (Cadherin은 cell-cell adhesion에 중요하지만, 이 과정에서는 selectin과 integrin이 주된 역할을 함)" },
    { "id": 1101, "chapter": [18], "professor": "이규영", "exam": "4차", "question": "세포주기(Cell Cycle)에 대한 설명으로 옳은 것은?", "answer": "4. Interphase(간기)는 G1, S, G2 phase로 나눠진다." },
    { "id": 1102, "chapter": [20], "professor": "이규영", "exam": "4차", "question": "악성 골 종양(malignant bone tumor)이 속하는 암의 종류는?", "answer": "2. Sarcomas (육종)" }
];