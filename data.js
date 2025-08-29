const latestLectureData = {
    "title": "Chapter 3: Bioenergetics and Metabolism",
    "professor": "김재봉",
    "summary": "세포의 에너지 대사를 이해하는 핵심 챕터입니다. 김재봉 교수님은 **각 과정의 특정 중간산물**을 묻는 단답형을 선호하시니, 큰 흐름과 함께 핵심 분자 이름을 암기하는 것이 중요합니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>자유 에너지(Gibbs Free Energy, ΔG):** ΔG가 음수(-)일 때 자발적 반응이라는 개념을 이해해야 합니다.</li><li><strong>ATP (Adenosine Triphosphate):** 세포의 에너지 화폐.</li><li><strong>주요 대사 경로:</strong> 해당과정(Glycolysis) → TCA 회로(Krebs Cycle) → 산화적 인산화(Oxidative Phosphorylation)로 이어지는 큰 흐름을 잡아야 합니다.</li></ul><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>TCA 회로의 첫 산물:</strong> <span class=\"text-red\">2023년 1차 시험</span>에서 **옥살아세트산(Oxaloacetate)과 아세틸 CoA가 만나 생성되는 첫 6탄당**을 묻는 문제가 출제되었습니다. 정답은 <strong>시트르산(Citrate)</strong>입니다.</li><li><strong>전자전달계 복합체:** <span class=\"text-red\">(2023년 1차 시험 출제)</span> 전자를 전달하며 양성자(H+)를 펌핑하는 <strong>Complex I, III, IV</strong>를 알아야 합니다.</li></ul>",
    "reviewQuiz": [
        { "question": "TCA cycle(Krebs cycle)에서 oxaloacetate와 Acetyl CoA가 만나 생성되는 이 사이클의 첫 번째 6탄당이 무엇인지 쓰시오.", "source": "23년 1차 기출", "answer": "시트르산 (Citrate)" },
        { "question": "해당과정(Glycolysis)이 일어나는 세포 내 장소는 어디이며, 이 과정의 최종 산물은 무엇인가요?", "source": "AI 예상", "answer": "장소: 세포질(Cytosol), 최종 산물: 피루브산(Pyruvate) 2분자" }
    ]
};

const lectureData = [
    { 
        "id": 1, 
        "date": "09/01", 
        "title": "Ch.1: An Overview of Cells and Cell Research", 
        "professor": "김성찬",
        "summary": "이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>세포 이론(Cell Theory):</strong> 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.</li><li><strong>원핵/진핵 구분:</strong> 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (<strong>Eukaryotic / Prokaryotic</strong>)</li></ul><div class=\"diagram\"><strong>DNA</strong><span class=\"arrow\">→ Transcription →</span><strong>RNA</strong><span class=\"arrow\">→ Translation →</span><strong>Protein</strong><br><small>(중심 원리 - Central Dogma)</small></div><p style=\"margin-top: 5px;\">* RNA에서 DNA로 가는 <strong>역전사(Reverse transcription)</strong> 과정도 매우 중요합니다.</p><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>결합 조직(Connective tissue):</strong> 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함. <span class=\"text-red\">2023년 1차 시험 출제!</span> 종류 암기 필수.</li><li><strong>유도만능줄기세포(iPS cells):</strong> 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. <span class=\"text-red\">2023년 1차 시험 출제!</span> 정의를 정확히 알아두세요.</li></ul>" 
    },
    { 
        "id": 2, 
        "date": "09/03", 
        "title": "Ch.2: Molecules and Membrane", 
        "professor": "김재봉",
        "summary": "이 챕터는 세포를 구성하는 기본 분자들과 세포막의 구조 및 기능에 대해 다룹니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>4대 생체분자:</strong> 탄수화물, 지질, 단백질, 핵산 각각의 기본 단위체(Monomer)와 중합체(Polymer)를 이해해야 합니다.</li><li><strong>세포막:</strong> <strong>유동 모자이크 모델(Fluid Mosaic Model)</strong>이 핵심 개념입니다.</li></ul><div class=\"diagram\"><strong>단량체 (Monomer)</strong><span class=\"arrow\"> → 중합 반응 → </span><strong>중합체 (Polymer)</strong><br><small>예: 아미노산 → 단백질</small></div><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>구조식 그리기:</strong> <span class=\"text-red\">2023년 1차 시험</span>에서 <strong>글루탐산(Glu), β-glucose, 포스파티딜세린(Phosphatidyl serine)</strong>의 구조식을 직접 그리도록 출제되었습니다.</li><li><strong>중합체별 결합 종류:</strong><span class=\"text-red\"> (2023년 1차 시험 출제)</span><br>    - 단백질: <strong>펩타이드 결합(Peptide bond)</strong><br>    - 다당류: <strong>글리코사이드 결합(Glycosidic bond)</strong><br>    - 핵산: <strong>인산다이에스터 결합(Phosphodiester bond)</strong></li></ul>"
    },
    { 
        "id": 3, 
        "date": "09/04", 
        "title": "Ch.3: Bioenergetics and Metabolism", 
        "professor": "김재봉", 
        "summary": "세포의 에너지 대사를 이해하는 핵심 챕터입니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>자유 에너지(Gibbs Free Energy, ΔG):** ΔG가 음수(-)일 때 자발적 반응이라는 개념을 이해해야 합니다.</li><li><strong>ATP (Adenosine Triphosphate):** 세포의 에너지 화폐.</li><li><strong>주요 대사 경로:</strong> 해당과정(Glycolysis) → TCA 회로(Krebs Cycle) → 산화적 인산화(Oxidative Phosphorylation)로 이어지는 큰 흐름을 잡아야 합니다.</li></ul><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>TCA 회로의 첫 산물:</strong> <span class=\"text-red\">2023년 1차 시험</span>에서 **옥살아세트산(Oxaloacetate)과 아세틸 CoA가 만나 생성되는 첫 6탄당**을 묻는 문제가 출제되었습니다. 정답은 <strong>시트르산(Citrate)</strong>입니다.</li></ul>"
    },
    { "id": 4, "date": "09/08", "title": "Ch.4: Fundamentals of Molecular Biology", "professor": "김성찬", "summary": "" },
    { "id": 5, "date": "09/11", "title": "Ch.5: Genomics", "professor": "김성찬", "summary": "" },
    { "id": 6, "date": "09/15", "title": "Ch.5: Proteomics, and System Biology", "professor": "김성찬", "summary": "" },
    { "id": 7, "date": "09/18", "title": "Ch.6: Genes and Genomes", "professor": "김성찬", "summary": "" },
    { "id": 8, "date": "09/24", "title": "Ch.7: DNA Replication and Repair", "professor": "이규영", "summary": "" },
    { "id": 9, "date": "09/25", "title": "Ch.7: DNA Rearrangements", "professor": "이규영", "summary": "" },
    { "id": 10, "date": "09/29", "title": "Ch.8: RNA synthesis (transcription)", "professor": "김재봉", "summary": "" },
    { "id": 11, "date": "10/02", "title": "Ch.8: RNA processing", "professor": "김재봉", "summary": "" },
    { "id": 12, "date": "10/13", "title": "Ch.9(10): Protein Synthesis (translation)", "professor": "조현주", "summary": "" },
    { "id": 13, "date": "10/16", "title": "Ch.9(10): Regulation of Protein Fuction", "professor": "조현주", "summary": "" },
    { "id": 14, "date": "10/23", "title": "Ch.10(11): Nuclear Envelope", "professor": "이규영", "summary": "" },
    { "id": 15, "date": "10/27", "title": "Ch.10(11): rRNA processing", "professor": "이규영", "summary": "" },
    { "id": 16, "date": "10/30", "title": "Ch.11(12): Protein Sorting", "professor": "김성찬", "summary": "" },
    { "id": 17, "date": "11/03", "title": "Ch.11(12): Protein Transport", "professor": "김성찬", "summary": "" },
    { "id": 18, "date": "11/05", "title": "Ch.12(13): Mitochondria/Peroxisomes", "professor": "김성찬", "summary": "" },
    { "id": 19, "date": "11/06", "title": "Ch.13(14): Cytoskeleton", "professor": "조현주", "summary": "" },
    { "id": 20, "date": "11/10", "title": "Ch.13(14): Cell Movement", "professor": "조현주", "summary": "" },
    { "id": 21, "date": "11/12", "title": "Ch.14(15): Plasma Membrane-1", "professor": "조현주", "summary": "" },
    { "id": 22, "date": "11/13", "title": "Ch.14(15): Plasma Membrane-2", "professor": "조현주", "summary": "" },
    { "id": 23, "date": "11/19", "title": "Ch.15(16): Cell Wall", "professor": "조현주", "summary": "" },
    { "id": 24, "date": "11/20", "title": "Ch.15(16): Cell Interaction", "professor": "조현주", "summary": "" },
    { "id": 25, "date": "11/24", "title": "Ch.16(17): Cell Signaling", "professor": "김재봉", "summary": "" },
    { "id": 26, "date": "11/26", "title": "Ch.16(17): Cell Signaling", "professor": "김재봉", "summary": "" },
    { "id": 27, "date": "11/27", "title": "Ch.17(18): Cell Cycle", "professor": "이규영", "summary": "" },
    { "id": 28, "date": "12/01", "title": "Ch.17(18): Cell Cycle", "professor": "이규영", "summary": "" },
    { "id": 29, "date": "12/03", "title": "Ch.18(19): Cell Death", "professor": "김재봉", "summary": "" },
    { "id": 30, "date": "12/04", "title": "Ch.18(19): Cell Renewal", "professor": "김재봉", "summary": "" },
    { "id": 31, "date": "12/08", "title": "Ch.19(20): Cancer", "professor": "이규영", "summary": "" }
];

const questionData = [
    { "id": 101, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "A ( ) segment of DNA that is expressed to yield a functional product. (e.g., rRNA, tRNA or a polypeptide)", "answer": "gene" },
    { "id": 102, "chapter": [1], "professor": "김성찬", "exam": "1차", "question": "( ) include bone(osteoblast), cartilage(chondrocyte), and adipose (adipocyte) tissue.", "answer": "Connective tissue" },
    { "id": 103, "chapter": [1], "professor": "김성찬", "exam": "1차", "question": "() are a type of pluripotent stem cell derived from adult somatic cells...", "answer": "IPS (induced pluripotent stem cells)" },
    { "id": 104, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "() is the synthesis of DNA from RNA. ( ) is enzyme used to generate cDNA from RNA template.", "answer": "Reverse transcription, Reverse transcriptase" },
    { "id": 105, "chapter": [4], "professor": "김성찬", "exam": "1차", "question": "() is a method for introducing DNA into animal cells. ( ) are lipid vesicles...", "answer": "Transfection, Liposomes" },
    { "id": 106, "chapter": [5, 8], "professor": "김성찬", "exam": "1차", "question": "( ) that control transcription of a gene may be located up to hundreds of kilobases away...", "answer": "Transcription Regulatory Elements" },
    { "id": 107, "chapter": [8], "professor": "김성찬", "exam": "1차", "question": "() occurs when exons of a gene are joined in different combinations...", "answer": "Alternative splicing" },
    { "id": 108, "chapter": [5], "professor": "김성찬", "exam": "1차", "question": "() and ( ) are transposable elements... Both are retrotransposons...", "answer": "LINE, SINE" },
    { "id": 201, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "Glu의 구조식을 그리시오.", "answer": "Glutamic acid (Glu) E..." },
    { "id": 202, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "β-glucose의 구조식을 그리시오.", "answer": "β-D-glucose의 고리 구조..." },
    { "id": 203, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "phosphatidyl serine의 구조식을 그리시오.", "answer": "글리세롤 골격에 두 개의 지방산과 인산기가 결합..." },
    { "id": 204, "chapter": [3], "professor": "김재봉", "exam": "1차", "question": "α-ketoglutarate의 구조식을 그리시오.", "answer": "5탄소 디카르복실산으로, 2번 탄소에 케톤 그룹..." },
    { "id": 205, "chapter": [2], "professor": "김재봉", "exam": "1차", "question": "주로 수소결합(hydrogen bond)을 사용하여 분자의 안정성을 높이는 우리 몸을 구성하는 핵심물질 3가지를 적으시오.", "answer": "물(water), 단백질(protein), 핵산(nucleic acid)" },
    { "id": 301, "chapter": [7, 8], "professor": "김재봉", "exam": "2차", "question": "DNA polymerase와 RNA polymerase의 공통된 성질 두 가지와 서로 다른 특이적 성격은 무엇인가?", "answer": "공통점: 1. 5'->3' 합성, 2. DNA template 필요..." },
    { "id": 302, "chapter": [8], "professor": "김재봉", "exam": "2차", "question": "lac operon에서 negative control과 positive control은 그 조절을 관여하는 (a)에 의해 결정된다...", "answer": "Negative control: repressor, allolactose..." },
    { "id": 401, "chapter": [10], "professor": "박재봉", "exam": "2차", "question": "단백질 분해를 조절하는 단백질은 무엇인가?", "answer": "4. ubiquitin" },
    { "id": 402, "chapter": [10, 17], "professor": "박재봉", "exam": "2차", "question": "단백질 인산화와 가장 거리가 먼 것은?", "answer": "5. lysine..." },
    { "id": 501, "chapter": [7], "professor": "이규영", "exam": "2차", "question": "DNA 복제에 관해 옳은 것은?", "answer": "4. leading strand와 lagging strand 모두 DNA 합성을 위해 primer strand를 필요로 한다." },
    { "id": 502, "chapter": [7], "professor": "이규영", "exam": "2차", "question": "PCNA의 역할로 알맞은 것은?", "answer": "2. DNA polymerase 활성 보조 (sliding clamp 역할)" },
    { "id": 601, "chapter": [12], "professor": "김성찬", "exam": "3차", "question": "ER과 golgi를 거쳐서 sorting 되는 단백질들의 최종 목적지는 어디인가? (*3가지 답하기)", "answer": "plasma membrane, secretory vesicle, lysosome" },
    { "id": 602, "chapter": [13], "professor": "김성찬", "exam": "3차", "question": "In the liver, (peroxisomes) is involved in synthesis of bile acids from cholesterol.", "answer": "peroxisomes" },
    { "id": 701, "chapter": [14], "professor": "박재봉", "exam": "3차", "question": "항암제 taxol의 기능으로 옳은 것은?", "answer": "2. MT(Microtubule) polymer를 안정화시킨다..." },
    { "id": 801, "chapter": [11], "professor": "이규영", "exam": "3차", "question": "nucleus에 대한 설명으로 옳은 것은?", "answer": "3. mRNA processing이 일어나는 곳이다." },
    { "id": 901, "chapter": [17], "professor": "김재봉", "exam": "4차", "question": "Intracellular receptor에 반응하는 small hydrophobic molecule 4종류는?", "answer": "Steroid hormones, Thyroid hormones, Vitamin D3, Retinoic acids" },
    { "id": 902, "chapter": [17], "professor": "김재봉", "exam": "4차", "question": "Ras/Raf/MEK/ERK pathway의 구성 요소를 순서대로 나열하시오.", "answer": "Ras -> Raf -> MEK -> ERK -> Elk-1" },
    { "id": 1001, "chapter": [16], "professor": "박재봉", "exam": "4차", "question": "Neutrophil과 macrophage가 혈관 밖으로 이동하는 과정(extravasation)에 대한 설명으로 옳지 않은 것은?", "answer": "5. Cadherin이 이 세포들과 주변의 세포들을 이어주어 이동을 촉진시킨다..." },
    { "id": 1101, "chapter": [18], "professor": "이규영", "exam": "4차", "question": "세포주기(Cell Cycle)에 대한 설명으로 옳은 것은?", "answer": "4. Interphase(간기)는 G1, S, G2 phase로 나눠진다." },
    { "id": 1102, "chapter": [20], "professor": "이규영", "exam": "4차", "question": "악성 골 종양(malignant bone tumor)이 속하는 암의 종류는?", "answer": "2. Sarcomas (육종)" }
];

const aiQuestionData = [
    { "id": "ai_101", "chapter": [1], "professor": "김성찬", "question": "현미경 기술 중, 살아있는 세포의 특정 단백질 이동을 관찰하는 데 가장 적합한 방법과 그 원리를 서술하시오.", "answer": "방법: 형광 현미경(Fluorescence microscopy)과 GFP(Green Fluorescent Protein) 융합 단백질 기술.\n원리: 관찰하고자 하는 단백질의 유전자에 GFP 유전자를 융합하여 세포 내에서 발현시킨다..." },
    { "id": "ai_201", "chapter": [2], "professor": "김재봉", "question": "인지질(Phospholipid)이 세포막의 기본 구조를 형성하는 핵심적인 화학적 특성은 무엇이며, 이 특성이 수용액 환경에서 어떻게 이중층(bilayer)을 형성하게 하는지 설명하시오.", "answer": "핵심 특성: 양친매성(Amphipathic).\n설명: 인지질은 친수성(hydrophilic) 머리와 소수성(hydrophobic) 꼬리를 동시에 가지고 있다..." },
    { "id": "ai_301", "chapter": [3], "professor": "김재봉", "question": "해당과정(Glycolysis)에서 ATP를 소모하는 단계와 생성하는 단계를 각각 하나씩 들고, 각 단계에 관여하는 효소의 이름을 쓰시오.", "answer": "ATP 소모 단계(Energy Investment Phase):\n- 단계: Glucose → Glucose-6-phosphate\n- 효소: Hexokinase\n\nATP 생성 단계(Energy Payoff Phase):\n- 단계: 1,3-Bisphosphoglycerate → 3-Phosphoglycerate\n- 효소: Phosphoglycerate kinase" }
];