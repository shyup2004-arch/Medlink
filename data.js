const latestLectureData = {
    "title": "Chapter 2: Molecules and Membranes",
    "professor": "김재봉",
    "summary": "이 챕터는 세포를 구성하는 기본 분자들과 세포막의 구조 및 기능에 대해 다룹니다. 김재봉 교수님 파트는 암기량이 많고, 특히 **구조식을 직접 그리는 문제**가 다수 출제되므로 꼼꼼한 학습이 필요합니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>4대 생체분자:** 탄수화물(Carbohydrates), 지질(Lipids), 단백질(Proteins), 핵산(Nucleic Acids) 각각의 기본 단위체와 중합체를 연결하는 결합 이름을 반드시 암기해야 합니다.</li><li><strong>단백질 구조:** 1차부터 4차 구조까지의 특징과 안정화에 기여하는 결합의 종류를 이해하는 것이 중요합니다.</li><li><strong>세포막 유동 모자이크 모델(Fluid Mosaic Model):** 인지질 이중층(Phospholipid bilayer)에 단백질이 박혀있는 유동적인 구조라는 개념을 잡아야 합니다.</li></ul><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>구조식 그리기:</strong> <span class=\"text-red\">2023년 1차 시험</span>에서 **글루탐산(Glu), β-glucose, 포스파티딜세린(Phosphatidyl serine)**의 구조식을 직접 그리도록 출제되었습니다. 주요 아미노산과 당, 인지질의 구조는 눈에 익혀두는 것이 필수적입니다.</li><li><strong>결합의 종류:** 단백질의 **펩타이드 결합(Peptide bond)**, 다당류의 **글리코사이드 결합(Glycosidic bond)**, 핵산의 **인산다이에스터 결합(Phosphodiester bond)**을 짝지어 외워야 합니다. <span class=\"text-red\">(2023년 1차 시험 출제)</span></li><li><strong>막 단백질 종류:** **내재성 막 단백질(Integral membrane protein)**과 **주변부 막 단백질(Peripheral membrane protein)**의 차이점을 묻는 문제가 출제되었습니다.</li></ul><h4>🧪 주요 용어</h4><ul><li><strong>양친매성(Amphipathic):** 친수성 머리와 소수성 꼬리를 모두 가진 인지질의 특성.</li><li><strong>수소 결합(Hydrogen bond):** 물, 단백질, 핵산의 구조 안정화에 기여하는 핵심적인 비공유결합.</li></ul>",
    "reviewQuiz": [
        { "question": "세포막을 구성하는 주요 지질로, 양친매성 특성을 가지는 분자는 무엇인가요?", "answer": "인지질 (Phospholipid)" },
        { "question": "단백질의 3차원 구조를 안정화시키는 데 가장 중요한 역할을 하는 비공유 결합 4가지는 무엇인가요?", "answer": "이온 결합(Ionic bonds), 수소 결합(Hydrogen bonds), 소수성 상호작용(Hydrophobic interactions), 반데르발스 힘(van der Waals interactions)" },
        { "question": "세포막을 관통하는 단백질과 막 표면에 부착된 단백질을 각각 무엇이라고 부르나요? (영문 포함)", "answer": "내재성 막 단백질(Integral membrane protein)과 주변부 막 단백질(Peripheral membrane protein)" }
    ]
};

const lectureData = [
    { 
        "id": 1, 
        "title": "Ch.1: An Overview of Cells and Cell Research", 
        "professor": "김성찬",
        "summary": "이 챕터는 세포생물학의 가장 기본이 되는 개념들을 다루며, 앞으로 배울 모든 내용의 기초가 됩니다. 전체적인 흐름은 '세포란 무엇인가?'에서 시작하여 '세포를 어떻게 연구하는가?'로 이어집니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>세포 이론(Cell Theory):</strong> 모든 생명체는 세포로 이루어져 있으며, 세포는 기존 세포로부터만 생성된다는 기본 원리.</li><li><strong>원핵/진핵 구분:</strong> 막으로 둘러싸인 핵과 세포소기관의 유무가 가장 큰 차이점. (<strong>Eukaryotic / Prokaryotic</strong>)</li></ul><div class=\"diagram\"><strong>DNA</strong><span class=\"arrow\">→ Transcription →</span><strong>RNA</strong><span class=\"arrow\">→ Translation →</span><strong>Protein</strong><br><small>(중심 원리 - Central Dogma)</small></div><p style=\"margin-top: 5px;\">* RNA에서 DNA로 가는 <strong>역전사(Reverse transcription)</strong> 과정도 매우 중요합니다.</p><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>결합 조직(Connective tissue):</strong> 뼈(osteoblast), 연골(chondrocyte), 지방(adipocyte) 등을 포함. <span class=\"text-red\">2023년 1차 시험 출제!</span> 종류 암기 필수.</li><li><strong>유도만능줄기세포(iPS cells):</strong> 성체 세포를 역분화시켜 만든 배아줄기세포 유사 세포. <span class=\"text-red\">2023년 1차 시험 출제!</span> 정의를 정확히 알아두세요.</li></ul><h4>🧪 주요 연구 기법</h4><ul><li>세포 관찰을 위한 <strong>현미경(Microscopy)</strong></li><li>세포를 키우는 <strong>세포 배양(Cell culture)</strong></li><li>연구에 사용되는 <strong>모델 생물(Model organisms)</strong>의 종류와 특징</li></ul>"
    },
    { 
        "id": 2, 
        "title": "Ch.2: Molecules and Membrane", 
        "professor": "김재봉",
        "summary": "이 챕터는 세포를 구성하는 기본 분자들과 세포막의 구조 및 기능에 대해 다룹니다. 김재봉 교수님 파트는 암기량이 많고, 특히 **구조식을 직접 그리는 문제**가 다수 출제되므로 꼼꼼한 학습이 필요합니다.<br><h4>🔑 핵심 암기 사항</h4><ul><li><strong>4대 생체분자:** 탄수화물(Carbohydrates), 지질(Lipids), 단백질(Proteins), 핵산(Nucleic Acids) 각각의 기본 단위체와 중합체를 연결하는 결합 이름을 반드시 암기해야 합니다.</li><li><strong>단백질 구조:** 1차부터 4차 구조까지의 특징과 안정화에 기여하는 결합의 종류를 이해하는 것이 중요합니다.</li><li><strong>세포막 유동 모자이크 모델(Fluid Mosaic Model):** 인지질 이중층(Phospholipid bilayer)에 단백질이 박혀있는 유동적인 구조라는 개념을 잡아야 합니다.</li></ul><h4><span class=\"text-red\">❗️ 기출 연관 중요 개념</span></h4><ul><li><strong>구조식 그리기:</strong> <span class=\"text-red\">2023년 1차 시험</span>에서 **글루탐산(Glu), β-glucose, 포스파티딜세린(Phosphatidyl serine)**의 구조식을 직접 그리도록 출제되었습니다. 주요 아미노산과 당, 인지질의 구조는 눈에 익혀두는 것이 필수적입니다.</li><li><strong>결합의 종류:** 단백질의 **펩타이드 결합(Peptide bond)**, 다당류의 **글리코사이드 결합(Glycosidic bond)**, 핵산의 **인산다이에스터 결합(Phosphodiester bond)**을 짝지어 외워야 합니다. <span class=\"text-red\">(2023년 1차 시험 출제)</span></li><li><strong>막 단백질 종류:** **내재성 막 단백질(Integral membrane protein)**과 **주변부 막 단백질(Peripheral membrane protein)**의 차이점을 묻는 문제가 출제되었습니다.</li></ul><h4>🧪 주요 용어</h4><ul><li><strong>양친매성(Amphipathic):** 친수성 머리와 소수성 꼬리를 모두 가진 인지질의 특성.</li><li><strong>수소 결합(Hydrogen bond):** 물, 단백질, 핵산의 구조 안정화에 기여하는 핵심적인 비공유결합.</li></ul>"
    },
    { "id": 3, "title": "Ch.3: Bioenergetics and Metabolism", "professor": "김재봉", "summary": "" },
    { "id": 4, "title": "Ch.4: Fundamentals of Molecular Biology", "professor": "김성찬", "summary": "" },
    { "id": 5, "title": "Ch.5: Genomics", "professor": "김성찬", "summary": "" },
    { "id": 6, "title": "Ch.5: Proteomics, and System Biology", "professor": "김성찬", "summary": "" },
    { "id": 7, "title": "Ch.6: Genes and Genomes", "professor": "김성찬", "summary": "" },
    { "id": 8, "title": "Ch.7: DNA Replication and Repair", "professor": "이규영", "summary": "" },
    { "id": 9, "title": "Ch.7: DNA Rearrangements", "professor": "이규영", "summary": "" },
    { "id": 10, "title": "Ch.8: RNA synthesis (transcription)", "professor": "김재봉", "summary": "" },
    { "id": 11, "title": "Ch.8: RNA processing", "professor": "김재봉", "summary": "" },
    { "id": 12, "title": "Ch.9(10): Protein Synthesis (translation)", "professor": "조현주", "summary": "" },
    { "id": 13, "title": "Ch.9(10): Regulation of Protein Fuction", "professor": "조현주", "summary": "" },
    { "id": 14, "title": "Ch.10(11): Nuclear Envelope", "professor": "이규영", "summary": "" },
    { "id": 15, "title": "Ch.10(11): rRNA processing", "professor": "이규영", "summary": "" },
    { "id": 16, "title": "Ch.11(12): Protein Sorting", "professor": "김성찬", "summary": "" },
    { "id": 17, "title": "Ch.11(12): Protein Transport", "professor": "김성찬", "summary": "" },
    { "id": 18, "title": "Ch.12(13): Mitochondria/Peroxisomes", "professor": "김성찬", "summary": "" },
    { "id": 19, "title": "Ch.13(14): Cytoskeleton", "professor": "조현주", "summary": "" },
    { "id": 20, "title": "Ch.13(14): Cell Movement", "professor": "조현주", "summary": "" },
    { "id": 21, "title": "Ch.14(15): Plasma Membrane-1", "professor": "조현주", "summary": "" },
    { "id": 22, "title": "Ch.14(15): Plasma Membrane-2", "professor": "조현주", "summary": "" },
    { "id": 23, "title": "Ch.15(16): Cell Wall", "professor": "조현주", "summary": "" },
    { "id": 24, "title": "Ch.15(16): Cell Interaction", "professor": "조현주", "summary": "" },
    { "id": 25, "title": "Ch.16(17): Cell Signaling", "professor": "김재봉", "summary": "" },
    { "id": 26, "title": "Ch.16(17): Cell Signaling", "professor": "김재봉", "summary": "" },
    { "id": 27, "title": "Ch.17(18): Cell Cycle", "professor": "이규영", "summary": "" },
    { "id": 28, "title": "Ch.17(18): Cell Cycle", "professor": "이규영", "summary": "" },
    { "id": 29, "title": "Ch.18(19): Cell Death", "professor": "김재봉", "summary": "" },
    { "id": 30, "title": "Ch.18(19): Cell Renewal", "professor": "김재봉", "summary": "" },
    { "id": 31, "title": "Ch.19(20): Cancer", "professor": "이규영", "summary": "" }
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