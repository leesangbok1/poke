
export let users = [
    { id: 'u1', name: '김민준', role: '학생', certified: false },
    { id: 'u2', name: '이서연', role: '직장인', certified: true },
    { id: 'u3', name: '박현우', role: '전문가', certified: true },
    { id: 'u4', name: '최지아', role: '구직자', certified: false },
    { id: 'u5', name: 'Nguyễn Văn An', role: '주부', certified: false },
    { id: 'u6', name: 'Trần Thị Bảo', role: '자영업자', certified: true },
    { id: 'u7', name: 'Lê Minh Đức', role: '프리랜서', certified: false },
    { id: 'u8', name: 'Phạm Thị Hoa', role: '개발자', certified: true },
    { id: 'u9', name: 'Hoàng Văn Long', role: '디자이너', certified: false },
    { id: 'u10', name: 'Vũ Thị Mai', role: '마케터', certified: true },
    { id: 'u11', name: 'Đỗ Hùng Sơn', role: '엔지니어', certified: true },
    { id: 'u12', name: 'Bùi Thu Trang', role: '기획자', certified: false },
    { id: 'u13', name: 'Ngô Gia Huy', role: '번역가', certified: true },
    { id: 'u14', name: 'Đặng Thanh Hà', role: '통역가', certified: true },
    { id: 'u15', name: 'Lý Mỹ Lệ', role: '컨설턴트', certified: true },
    { id: 'u16', name: 'Trịnh Văn Quyết', role: '용접공', certified: true },
    { id: 'u17', name: 'Võ Thị Thu', role: '농장근로자', certified: false },
    { id: 'u18', name: 'Hà Minh Tuấn', role: '요리사', certified: true },
    { id: 'u19', name: 'Mai Anh Thư', role: '네일아티스트', certified: false },
    { id: 'u20', name: 'Dương Văn Hùng', role: '건설노동자', certified: false },
];

export let posts = [
    // Visa & Legal (25 posts)
    {
        id: 'p1',
        authorId: 'u3',
        category: 'visa',
        title: 'E-7-4 비자 점수제, 2024년 최신 변경사항 완벽 분석',
        views: 2840,
        content: '2024년부터 E-7-4 숙련기능인력 비자 점수제가 크게 변경되었습니다. 특히 제조업, 농축산업 분야의 경력 및 한국어 능력 점수 배점이 상향 조정되었습니다. 본인의 예상 점수를 계산해보고 미리 준비하는 것이 중요합니다.<br><br><strong>주요 변경사항:</strong><ul><li>연간 쿼터 확대 (35,000명)</li><li>미래 뿌리산업 직종 가점 신설</li><li>사회통합프로그램 5단계 이수 시 가점 10점 추가</li></ul><p><em>자세한 내용은 출입국외국인정책본부 공지사항을 반드시 확인하세요.</em></p>',
    },
    {
        id: 'p2',
        authorId: 'u14',
        category: 'visa',
        title: 'F-2-R 지역특화형 거주비자, 나도 받을 수 있을까? (인구감소지역)',
        views: 1980,
        content: 'F-2-R 비자는 지방 소멸 위기에 대응하기 위해 신설된 제도로, 지정된 인구감소지역에 거주 및 취업을 조건으로 발급됩니다. 지자체별로 요구하는 조건과 추천서 발급 절차가 상이하니, 목표 지역의 공고를 확인하는 것이 첫걸음입니다.'
    },
    {
        id: 'p3',
        authorId: 'u1',
        category: 'visa',
        title: 'D-2 유학생에서 D-10 구직비자로 변경 시 주의사항',
        views: 3120,
        content: '졸업 후 D-10 비자로 변경하여 구직 활동을 이어가려는 유학생이 많습니다. 하지만 학점 평균, 재정 능력 증명 등 요건이 까다로워지고 있으니 미리 서류를 꼼꼼히 챙겨야 합니다. 특히 졸업 후 14일 이내에 신청해야 한다는 점을 잊지 마세요.'
    },
    {
        id: 'p4',
        authorId: 'u13',
        category: 'visa',
        title: 'F-6 결혼이민 비자, 베트남에서 준비해야 할 서류 총정리',
        views: 2550,
        content: '한국인 배우자와 혼인신고 후 F-6 비자를 신청할 때 베트남에서 준비해야 할 서류가 많습니다. (출생증명서, 혼인상황확인서, 범죄경력증명서 등) 모든 서류는 번역 및 공증, 외교부 영사 인증을 받아야 합니다.'
    },
    {
        id: 'p5',
        authorId: 'u7',
        category: 'visa',
        title: '사회통합프로그램(KIIP) 5단계 이수, 영주권(F-5) 신청에 얼마나 유리할까?',
        views: 4200,
        content: '사회통합프로그램 5단계를 이수하면 영주권(F-5), 국적 신청 시 한국어 능력 입증 면제 및 가산점 혜택을 받을 수 있습니다. 특히 F-2-7 점수제 거주비자를 거쳐 영주권을 목표로 한다면 거의 필수라고 할 수 있습니다.'
    },
    // ... (add 20 more visa/legal posts)
    { id: 'p6', authorId: 'u16', category: 'visa', title: 'E-9 비전문취업 비자, 사업장 변경 절차와 허용 사유', views: 2100, content: 'E-9 근로자의 사업장 변경은 원칙적으로 제한되지만, 휴업, 폐업, 임금체불 등 특정 사유가 발생하면 고용센터의 허가를 받아 변경할 수 있습니다. 절차와 필요 서류를 알아보세요.' },
    { id: 'p7', authorId: 'u2', category: 'visa', title: 'F-4 재외동포 비자, 국내 거소신고증 발급 및 갱신 방법', views: 1800, content: 'F-4 비자 소지자는 입국 후 90일 이내에 관할 출입국외국인관서에 국내 거소신고를 해야 합니다. 거소신고증의 유효기간을 확인하고 만료 전 갱신하는 것을 잊지 마세요.' },
    { id: 'p8', authorId: 'u8', category: 'visa', title: 'C-3-1 단기방문 비자로 입국 후 체류자격 변경 가능한가요?', views: 1500, content: '원칙적으로 C-3-1과 같은 단기방문 비자는 국내에서 장기체류 비자로 변경이 불가능합니다. 예외적인 인도적 사유가 없다면 출국 후 다시 비자를 받아야 합니다.' },
    { id: 'p9', authorId: 'u15', category: 'visa', title: '외국인 등록증(ARC) 분실 시 재발급 신청 절차 및 수수료', views: 1250, content: '외국인 등록증을 분실했다면 14일 이내에 재발급 신청을 해야 과태료를 피할 수 있습니다. HiKorea 웹사이트를 통해 방문 예약을 하고 신청서, 여권, 사진, 수수료를 준비하여 방문하세요.' },
    { id: 'p10', authorId: 'u11', category: 'visa', title: 'G-1 기타 비자, 난민 신청 절차 및 체류 허가', views: 980, content: 'G-1 비자는 난민 신청자 등 인도적 사유로 체류해야 하는 외국인에게 발급됩니다. 난민 신청 절차는 매우 복잡하고 오래 걸리므로 전문가의 도움이 필요할 수 있습니다.' },
    { id: 'p11', authorId: 'u3', category: 'visa', title: 'D-4-6 한국어연수 비자, 어학당 출석률이 중요한 이유', views: 1780, content: 'D-4-6 비자 연장 시 어학당 출석률은 가장 중요한 심사 기준 중 하나입니다. 보통 80% 이상의 출석률을 요구하며, 미달 시 비자 연장이 거부될 수 있습니다.' },
    { id: 'p12', authorId: 'u17', category: 'visa', title: 'F-1 방문동거 비자, 초청 가능 대상 및 활동 범위', views: 1420, content: 'F-1 비자는 주로 F-4 재외동포나 F-5 영주권자의 가족을 초청할 때 발급됩니다. 취업 활동은 불가능하며, 동거 및 가사 지원 등의 활동만 허용됩니다.' },
    { id: 'p13', authorId: 'u6', category: 'visa', title: 'D-8 기업투자 비자, 최소 투자금액 및 법인 설립 절차', views: 1150, content: 'D-8 비자를 받기 위해서는 최소 1억 원 이상의 투자가 필요하며, 외국인투자촉진법에 따라 법인을 설립해야 합니다. 복잡한 법률 및 회계 절차가 수반됩니다.' },
    { id: 'p14', authorId: 'u18', category: 'visa', title: 'E-6 문화예술 비자, 호텔 공연 가수로 취업하기', views: 1380, content: 'E-6 비자는 공연, 방송, 모델 등 예술 활동을 위한 비자입니다. 계약서, 경력증명서, 공연계획서 등 해당 분야의 전문성을 입증하는 것이 중요합니다.' },
    { id: 'p15', authorId: 'u10', category: 'visa', title: '체류기간 만료 임박! 연장 신청은 언제부터 가능할까?', views: 2300, content: '체류기간 연장 신청은 현재 체류기간 만료일 4개월 전부터 만료 당일까지 가능합니다. 하지만 처리가 오래 걸릴 수 있으니 최소 1~2개월 전에는 신청하는 것이 안전합니다.' },
    { id: 'p16', authorId: 'u4', category: 'visa', title: '불법체류 자진신고, 범칙금 및 재입국 규제는?', views: 3500, content: '불법체류 상태에서 자진신고를 하면 범칙금이 감면될 수 있으며, 일정 기간 후 재입국이 가능한 경우도 있습니다. 하지만 정책은 계속 바뀌므로 항상 최신 정보를 확인해야 합니다.' },
    { id: 'p17', authorId: 'u12', category: 'visa', title: 'D-2 유학생, 부모님 초청 (F-1-15) 비자 신청 방법', views: 1950, content: 'D-2 비자를 소지한 유학생이 학업 지원을 위해 부모님을 초청할 경우 F-1-15 비자를 신청할 수 있습니다. 초청자의 재정 능력 증명이 핵심입니다.' },
    { id: 'p18', authorId: 'u5', category: 'visa', title: '영주권(F-5) 취득 후, 가족 초청은 어떻게 하나요?', views: 2100, content: 'F-5 영주권자는 배우자 및 미성년 자녀를 F-2-3 비자로 초청할 수 있습니다. 초청자의 소득 및 재산 요건을 충족해야 합니다.' },
    { id: 'p19', authorId: 'u9', category: 'visa', title: '외국인 근로자 퇴직금, 출국만기보험으로 받기', views: 1850, content: 'E-9, H-2 비자 근로자는 퇴직금을 출국만기보험 형태로 받게 됩니다. 출국 후 14일 이내에 신청해야 하며, 국내 또는 해외에서 수령할 수 있습니다.' },
    { id: 'p20', authorId: 'u19', category: 'visa', title: 'H-2 방문취업 동포, 건설업 취업 교육 이수 필수!', views: 1650, content: 'H-2 비자 소지자가 건설 현장에서 일하기 위해서는 반드시 건설업 기초안전보건교육을 이수하고 이수증을 받아야 합니다.' },
    { id: 'p21', authorId: 'u20', category: 'visa', title: '임금 체불 시 대처 방법 (고용노동부 진정 제기)', views: 2400, content: '임금 체불은 명백한 불법입니다. 사업장 관할 고용노동청에 진정을 제기하여 도움을 받을 수 있습니다. 외국인 근로자 지원센터 상담을 통해 절차를 진행할 수도 있습니다.' },
    { id: 'p22', authorId: 'u1', category: 'visa', title: 'D-10-2 점수제 구직 비자, 신설된 제도의 모든 것', views: 1900, content: 'D-10-2는 국내 전문학사 이상 학위 취득자를 대상으로 하는 점수제 구직 비자입니다. E-7-1으로의 취업 연계를 목표로 합니다.' },
    { id: 'p23', authorId: 'u8', category: 'visa', title: 'F-2-7 점수제 거주비자, 고소득 전문직을 위한 최고의 선택', views: 2800, content: 'F-2-7 비자는 소득, 학력, 나이, 한국어 능력 등을 점수로 환산하여 일정 점수 이상인 전문 인력에게 부여됩니다. 체류 활동이 자유롭다는 큰 장점이 있습니다.' },
    { id: 'p24', authorId: 'u13', category: 'visa', title: '국적 취득, 필기시험과 면접 심사 준비 팁', views: 3100, content: '대한민국 국적을 취득하기 위한 마지막 관문은 필기시험과 면접 심사입니다. 사회통합프로그램 기본 소양 평가 문제집을 풀어보고, 애국가 4절까지 외우는 등 철저한 준비가 필요합니다.' },
    { id: 'p25', authorId: 'u15', category: 'visa', title: '부동산 계약 시 확정일자, 전세보증금을 지키는 최소한의 안전장치', views: 1700, content: '외국인도 전월세 계약 후 주민센터나 등기소에서 확정일자를 받아야 합니다. 집이 경매로 넘어가는 최악의 경우에도 보증금을 우선적으로 변제받을 수 있는 중요한 권리입니다.' },

    // Job & Employment (25 posts)
    {
        id: 'p26',
        authorId: 'u16',
        category: 'job',
        title: '안산/시흥 지역, 뿌리산업(용접, 금형) 구인 공고 보는 곳',
        views: 2250,
        content: '안산, 시흥 등 수도권 공단 지역에는 뿌리산업 관련 구인 공고가 많습니다. 교차로, 벼룩시장 같은 생활정보지와 잡코리아, 사람인 같은 온라인 채용 사이트를 함께 확인하는 것이 좋습니다. 외국인 전용 채용 앱도 활용해보세요.'
    },
    {
        id: 'p27',
        authorId: 'u8',
        category: 'job',
        title: '베트남 개발자, 한국 IT 회사 취업하기 (코딩 테스트, 면접 팁)',
        views: 1950,
        content: '한국 IT 회사는 대부분 코딩 테스트를 통해 기술 역량을 검증합니다. 프로그래머스, 백준 같은 사이트에서 미리 연습하고, 기술 면접에서는 본인이 진행했던 프로젝트에 대해 명확히 설명하는 연습이 중요합니다.'
    },
    // ... (add 23 more job/employment posts)
    { id: 'p28', authorId: 'u18', category: 'job', title: '요리사 E-7-1 비자, 한식/양식/중식 조리사 자격증 필수인가요?', views: 1800, content: 'E-7-1 요리사 비자 신청 시 관련 분야 자격증은 전문성을 입증하는 데 매우 유리합니다. 필수 요건은 아니지만, 경력 증명과 함께 제출하면 비자 발급 가능성을 높일 수 있습니다.' },
    { id: 'p29', authorId: 'u19', category: 'job', title: '네일아티스트, 미용사(네일) 국가자격증 취득 과정', views: 1600, content: '한국에서 네일아티스트로 합법적으로 일하려면 국가자격증이 필요합니다. 필기, 실기 시험을 통과해야 하며, 전문 학원에서 체계적으로 준비하는 것을 추천합니다.' },
    { id: 'p30', authorId: 'u17', category: 'job', title: '농업/축산업 분야 E-9 비자, 어떤 일을 하게 되나요?', views: 2100, content: '농축산업 E-9 비자는 계절에 따라 다양한 업무를 수행합니다. 작물 재배, 수확, 포장, 가축 사육 관리 등 사업장의 특성에 따라 업무 내용이 달라집니다. 체력 소모가 클 수 있습니다.' },
    { id: 'p31', authorId: 'u4', category: 'job', title: '한국 회사 면접 시, 절대 하지 말아야 할 질문들', views: 2500, content: '면접에서 연봉, 복지, 야근 여부 등을 너무 직접적으로 먼저 물어보는 것은 좋지 않은 인상을 줄 수 있습니다. 회사의 비전이나 직무에 대한 질문을 통해 기여 의지를 보여주는 것이 좋습니다.' },
    { id: 'p32', authorId: 'u2', category: 'job', title: '이력서 사진, 꼭 정장 입고 찍어야 하나요?', views: 1750, content: '반드시 정장을 입을 필요는 없지만, 신뢰감을 줄 수 있는 깔끔하고 단정한 복장으로 찍는 것이 좋습니다. 배경은 깨끗한 단색 배경을 추천합니다.' },
    { id: 'p33', authorId: 'u11', category: 'job', title: '평택 삼성전자 반도체 공장, 협력업체 취업 정보', views: 3200, content: '삼성전자 평택 캠퍼스에는 수많은 협력업체가 있습니다. 채용은 각 협력업체에서 직접 진행하며, 인크루트, 잡코리아 등에서 "평택 반도체", "삼성 협력사" 등의 키워드로 검색할 수 있습니다.' },
    { id: 'p34', authorId: 'u7', category: 'job', title: '프리랜서 번역가/통역가, 일감은 어디서 구하나요?', views: 1400, content: '크몽, 숨고와 같은 프리랜서 마켓 플랫폼이나 링크드인, 사람인 같은 구인 사이트에서 프로젝트 단위의 일감을 찾을 수 있습니다. 번역 회사의 프리랜서로 등록하는 것도 좋은 방법입니다.' },
    { id: 'p35', authorId: 'u20', category: 'job', title: '건설 현장 일용직, "인력사무소"는 어떻게 이용하나요?', views: 1900, content: '새벽에 인력사무소에 나가면 그날의 현장을 배정받는 방식으로 일합니다. 보통 수수료를 10% 정도 떼고 일당을 지급합니다. 안전화를 꼭 챙겨가세요.' },
    { id: 'p36', authorId: 'u12', category: 'job', title: '외국인 유학생, 시간제 취업(아르바이트) 허가 신청 방법', views: 2300, content: 'D-2, D-4 비자 소지자는 하이코리아에서 시간제 취업 허가를 받은 후 아르바이트를 해야 합니다. 허가 없이 일하면 불법 취업에 해당합니다.' },
    { id: 'p37', authorId: 'u10', category: 'job', title: '마케팅 직무, 포트폴리오 준비하는 법 (신입)', views: 1550, content: '신입 마케터는 경험이 없으므로, 가상의 브랜드를 설정하여 마케팅 전략을 기획하거나, 개인 SNS 채널을 성공적으로 운영한 경험을 포트폴리오로 만들 수 있습니다.' },
    { id: 'p38', authorId: 'u6', category: 'job', title: '베트남 쌀국수 식당 창업, 사업자 등록 및 영업 허가 절차', views: 1850, content: '식당 창업을 위해서는 사업자 등록, 영업신고증 발급, 위생 교육 이수 등이 필요합니다. D-8, D-9, F-2, F-5, F-6 비자 등 취업 활동이 자유로운 비자를 소지해야 합니다.' },
    { id: 'p39', authorId: 'u14', category: 'job', title: '병원 통역, 의료 전문 용어 공부는 어떻게 해야 할까요?', views: 1300, content: '의료 통역은 전문성이 매우 중요합니다. 국립국어원의 의료 용어집이나 관련 서적을 통해 꾸준히 학습하고, 실제 통역 사례를 많이 접하는 것이 중요합니다.' },
    { id: 'p40', authorId: 'u5', category: 'job', title: '한국의 "맘카페", 지역 정보와 중고 거래의 보고', views: 1200, content: '네이버 맘카페는 지역별로 활성화되어 있어 육아 정보, 지역 맛집, 중고 물품 거래 등 유용한 정보를 얻기 좋습니다. 등업 조건이 까다로운 곳도 있습니다.' },
    { id: 'p41', authorId: 'u9', category: 'job', title: '디자이너 취업, "포트폴리오"가 이력서보다 중요하다', views: 1650, content: '디자인 직군은 이력서보다 포트폴리오가 훨씬 중요합니다. 자신의 강점을 보여줄 수 있는 3~5개의 핵심 프로젝트를 선정하여 시각적으로 잘 구성해야 합니다. Behance, Notion 등을 활용해보세요.' },
    { id: 'p42', authorId: 'u1', category: 'job', title: '인턴십(D-10-3) 비자, 졸업 전 현장실습 학점 연계', views: 1450, content: 'D-10-3 비자는 정규 학위과정과 연계된 현장실습(인턴)을 위한 비자입니다. 학교의 승인을 받아야 하며, 졸업 요건에 포함되는 학점인 경우에만 가능합니다.' },
    { id: 'p43', authorId: 'u16', category: 'job', title: '조선소 취업, 거제/울산 지역 정보 및 기숙사 생활', views: 2800, content: '거제, 울산 지역 조선소는 E-7-3(용접공 등) 비자 근로자를 많이 채용합니다. 대부분 기숙사를 제공하지만, 2인 1실 또는 4인 1실 등 공동생활을 해야 하는 경우가 많습니다.' },
    { id: 'p44', authorId: 'u8', category: 'job', title: 'IT 개발자, "네카라쿠배당토"는 어떤 회사인가요?', views: 2100, content: '"네카라쿠배당토"는 네이버, 카카오, 라인, 쿠팡, 배달의민족, 당근마켓, 토스를 일컫는 말로, 한국을 대표하는 대형 IT 기업들을 의미합니다. 개발자들에게 인기가 매우 높습니다.' },
    { id: 'p45', authorId: 'u2', category: 'job', title: '직장 내 괴롭힘, 증거 수집 및 신고 방법', views: 1950, content: '직장 내 괴롭힘을 당했다면 녹음, 문자 메시지, 동료의 증언 등 객관적인 증거를 모으는 것이 중요합니다. 회사 내 고충처리위원회나 고용노동부에 신고할 수 있습니다.' },
    { id: 'p46', authorId: 'u11', category: 'job', title: '4대 보험, 국민연금과 건강보험료는 왜 이렇게 많이 떼나요?', views: 2350, content: '4대 보험은 국민연금, 건강보험, 고용보험, 산재보험을 말합니다. 월급(과세소득)을 기준으로 일정 비율을 납부하며, 회사와 근로자가 절반씩 부담합니다. 국민연금은 나중에 돌려받을 수 있습니다.' },
    { id: 'p47', authorId: 'u15', category: 'job', title: '헤드헌터를 통한 이직, 장점과 단점', views: 1250, content: '헤드헌터를 통하면 비공개 채용 공고에 지원할 수 있고 연봉 협상 등에서 도움을 받을 수 있는 장점이 있습니다. 하지만 헤드헌터의 이익에 따라 원하지 않는 포지션을 추천받을 수도 있습니다.' },
    { id: 'p48', authorId: 'u4', category: 'job', title: '면접 후 결과 연락, 언제까지 기다려야 할까?', views: 2600, content: '보통 1주일 이내에 연락이 오지만, 회사 사정에 따라 2주 이상 걸리는 경우도 있습니다. 1주일 정도 기다려보고 채용 담당자에게 정중하게 메일로 문의해볼 수 있습니다.' },
    { id: 'p49', authorId: 'u7', category: 'job', title: '프리랜서, 3.3% 원천징수와 5월 종합소득세 신고', views: 1700, content: '프리랜서는 급여를 받을 때 3.3%의 세금을 원천징수하고, 다음 해 5월에 종합소득세 신고를 통해 최종 납부할 세금을 정산해야 합니다. 수입이 많다면 환급 대신 추가 납부할 수도 있습니다.' },
    { id: 'p50', authorId: 'u18', category: 'job', title: '호텔 주방 보조, 경력을 쌓아 정식 요리사로!', views: 1600, content: '대형 호텔 주방에서 보조로 시작하여 경력을 쌓으면 E-7 비자 요건을 갖추고 정식 요리사로 성장할 수 있는 기회가 있습니다. 성실함과 배우려는 자세가 중요합니다.' },

    // Daily Life & Culture (25 posts)
    {
        id: 'p51',
        authorId: 'u5',
        category: 'life',
        title: '베트남 식료품, 서울 대림동/안산 원곡동에서 구매하기',
        views: 3500,
        content: '느억맘 소스, 분짜 면, 각종 허브 등 베트남 식료품이 그립다면 서울 대림중앙시장이나 안산 다문화음식거리에 방문해보세요. 현지의 맛을 느낄 수 있는 식당도 많습니다.'
    },
    {
        id: 'p52',
        authorId: 'u9',
        category: 'life',
        title: '한국에서 중고 거래, "당근마켓" 이용 꿀팁',
        views: 4100,
        content: '당근마켓은 지역 기반 중고 거래 앱으로 매우 인기가 많습니다. "매너온도"를 통해 상대방의 신뢰도를 확인할 수 있고, 직거래 시에는 사람이 많은 공공장소에서 만나는 것이 안전합니다.'
    },
    // ... (add 23 more life/culture posts)
    { id: 'p53', authorId: 'u12', category: 'life', title: '쓰레기 분리수거, 일반쓰레기 vs 음식물쓰레기 구분법', views: 2800, content: '한국의 분리수거는 매우 복잡합니다. 가장 헷갈리는 것이 음식물 쓰레기인데, 동물의 사료로 쓸 수 있는지를 기준으로 생각하면 쉽습니다. 딱딱한 뼈, 조개 껍데기, 과일 씨 등은 일반쓰레기입니다.' },
    { id: 'p54', authorId: 'u10', category: 'life', title: '알뜰폰(MVNO) 요금제, 통신비 절약하는 최고의 방법', views: 2200, content: 'SKT, KT, LGU+ 망을 빌려 쓰는 알뜰폰은 통화 품질은 동일하면서 요금은 훨씬 저렴합니다. 데이터 무제한 요금제도 2~3만 원대에 사용할 수 있습니다.' },
    { id: 'p55', authorId: 'u13', category: 'life', title: '카카오맵 vs 네이버 지도, 어떤 앱이 더 좋을까?', views: 3100, content: '두 앱 모두 훌륭하지만, 대중교통 길찾기는 카카오맵이, 자동차 내비게이션과 지역 상점 정보는 네이버 지도가 조금 더 강점이 있다는 평이 많습니다. 둘 다 사용해보는 것을 추천합니다.' },
    { id: 'p56', authorId: 'u20', category: 'life', title: '겨울철 난방비 폭탄 피하는 법 (보일러 외출 모드 활용)', views: 2500, content: '겨울에 보일러를 완전히 끄고 외출하면 다시 켤 때 난방비가 더 많이 나올 수 있습니다. "외출" 모드를 활용하거나 실내 온도를 17~18도로 낮게 설정해두는 것이 효율적입니다.' },
    { id: 'p57', authorId: 'u17', category: 'life', title: '한국의 배달 문화: 배달의민족 vs 요기요', views: 2900, content: '한국에서는 거의 모든 음식을 배달시킬 수 있습니다. 배달의민족과 요기요가 가장 대표적인 앱이며, 할인 쿠폰 경쟁이 치열하니 두 앱을 비교해보는 것이 좋습니다.' },
    { id: 'p58', authorId: 'u6', category: 'life', title: '베트남 국제운전면허증, 한국에서 인정될까?', views: 1800, content: '베트남에서 발급받은 국제운전면허증(IDP)은 한국에서 사용할 수 있습니다. 다만, 유효기간을 확인해야 하며 항상 한국 운전면허증과 여권을 함께 소지해야 합니다.' },
    { id: 'p59', authorId: 'u19', category: 'life', title: '서울 지하철, "또타지하철" 앱으로 민원 신고 및 유실물 찾기', views: 1500, content: '지하철에서 덥거나 추울 때, 위급 상황 발생 시 "또타지하철" 앱을 통해 민원을 넣으면 빠르게 조치해줍니다. 유실물 신고 및 확인도 가능합니다.' },
    { id: 'p60', authorId: 'u1', category: 'life', title: '대학교 근처 "자취방" 구할 때 체크리스트', views: 2100, content: '자취방을 구할 때는 수압, 채광, 방음, 곰팡이 여부를 꼼꼼히 확인해야 합니다. 낮과 밤에 한 번씩 방문하여 주변 환경을 살펴보는 것도 좋은 방법입니다.' },
    { id: 'p61', authorId: 'u5', category: 'life', title: '아이 예방접종, "예방접종도우미" 앱으로 관리하기', views: 1300, content: '한국에서는 "예방접종도우미" 앱을 통해 아기의 예방접종 기록을 관리하고 다음 접종 일정을 알림 받을 수 있습니다. 보건소에서 무료 또는 저렴하게 접종이 가능합니다.' },
    { id: 'p62', authorId: 'u2', category: 'life', title: '한국 직장 회식 문화, 술 못 마시는데 괜찮을까?', views: 3300, content: '과거에 비해 술을 강권하는 문화는 많이 사라졌습니다. 술을 못 마신다고 솔직하게 이야기하고, 음료수를 마시면서 분위기를 맞추는 것만으로도 충분합니다.' },
    { id: 'p63', authorId: 'u11', category: 'life', title: 'KTX/SRT 기차 예매, 명절에는 "예매 전쟁"', views: 2400, content: '설날, 추석 같은 명절 기간의 기차표는 예매 시작과 동시에 매진될 수 있습니다. 코레일톡, SRT 앱에서 예매 날짜를 미리 공지하니 확인하고 준비해야 합니다.' },
    { id: 'p64', authorId: 'u14', category: 'life', title: '한국의 "보건소", 저렴하게 이용하는 건강 관리 꿀팁', views: 2600, content: '보건소에서는 일반 병원보다 훨씬 저렴한 비용으로 기본적인 진료, 예방접종, 건강검진, 인바디 측정 등을 이용할 수 있습니다. 외국인 등록이 되어 있다면 누구나 이용 가능합니다.' },
    { id: 'p65', authorId: 'u3', category: 'life', title: '은행 공인인증서(공동인증서) 발급 및 갱신 방법', views: 2700, content: '은행 거래, 공공기관 사이트 이용에 필수적인 공동인증서는 1년마다 갱신해야 합니다. 만료일 30일 전부터 갱신이 가능하며, 기간을 놓치면 은행에 직접 방문해야 할 수도 있습니다.' },
    { id: 'p66', authorId: 'u8', category: 'life', title: '코스트코, 이마트 트레이더스 같은 창고형 할인점 이용법', views: 1900, content: '창고형 할인점은 연회비를 내는 회원제로 운영되며, 대용량 상품을 저렴하게 구매할 수 있습니다. 가족이 많거나 자영업을 하는 경우 유용합니다.' },
    { id: 'p67', authorId: 'u16', category: 'life', title: '자동차 정기 검사, 기간 내에 받지 않으면 과태료!', views: 1600, content: '비사업용 승용차는 최초 4년, 그 후 2년마다 자동차 정기 검사를 받아야 합니다. TS한국교통안전공단 사이버검사소에서 예약할 수 있습니다.' },
    { id: 'p68', authorId: 'u7', category: 'life', title: '한국의 "찜질방", 24시간 운영하는 곳도 있다?', views: 2200, content: '찜질방은 목욕, 사우나, 휴식을 한 번에 즐길 수 있는 공간입니다. 저렴한 가격에 숙박 대용으로 이용하는 사람들도 많으며, 24시간 운영하는 곳이 많습니다.' },
    { id: 'p69', authorId: 'u18', category: 'life', title: '베트남으로 송금, 어떤 앱/서비스가 가장 수수료가 저렴한가요?', views: 3800, content: '은행을 직접 이용하는 것보다 GME, 한패스, 센트비 같은 해외송금 전문 앱을 이용하는 것이 수수료가 훨씬 저렴하고 간편합니다. 환율과 수수료를 비교해보고 선택하세요.' },
    { id: 'p70', authorId: 'u4', category: 'life', title: '이케아(IKEA) 가구, 배송/조립 서비스 이용 후기', views: 1750, content: '이케아 가구는 직접 조립해야 하는 불편함이 있지만, 저렴하고 디자인이 예뻐 인기가 많습니다. 배송 서비스와 조립 서비스를 별도로 신청할 수 있지만 비용이 추가됩니다.' },
    { id: 'p71', authorId: 'u12', category: 'life', title: '전입신고, 이사 후 14일 이내에 꼭 해야 하는 이유', views: 2350, content: '이사 후 14일 이내에 새로운 주소지의 주민센터에 방문하거나 정부24 웹사이트를 통해 전입신고를 해야 합니다. 확정일자를 받기 위한 필수 절차이기도 합니다.' },
    { id: 'p72', authorId: 'u15', category: 'life', title: '중고차 구매 시 주의사항 (허위매물, 침수차 구별법)', views: 2150, content: '중고차를 구매할 때는 자동차등록원부를 통해 압류/저당 내역을 확인하고, 보험개발원의 카히스토리에서 사고 이력을 조회해보는 것이 필수입니다. 전문가와 동행하는 것을 추천합니다.' },
    { id: 'p73', authorId: 'u9', category: 'life', title: '서울시 공공자전거 "따릉이" 이용 방법 및 요금', views: 1950, content: '따릉이는 서울 시내 곳곳에 대여소가 있어 단거리 이동에 매우 편리합니다. 앱을 통해 쉽게 대여하고 반납할 수 있으며, 이용권 가격도 매우 저렴합니다.' },
    { id: 'p74', authorId: 'u10', category: 'life', title: '한국의 "올리브영", 꼭 사야 할 뷰티 아이템 추천', views: 2850, content: '올리브영은 한국의 대표적인 헬스&뷰티 스토어입니다. 마스크팩, 선크림, 각종 색조 화장품 등 K-뷰티 제품을 저렴하게 세일할 때 구매하기 좋습니다.' },
    { id: 'p75', authorId: 'u20', category: 'life', title: '긴급재난문자, 왜 이렇게 자주 오나요? (차단 방법)', views: 2650, content: '실종 아동, 재난 상황, 감염병 정보 등 안전에 관련된 중요한 내용을 전달하기 위해 발송됩니다. 하지만 너무 잦다고 느껴진다면 휴대폰 설정에서 특정 종류의 알림을 차단할 수 있습니다.' },

    // Health & Medical (15 posts)
    {
        id: 'p76',
        authorId: 'u2',
        category: 'health',
        title: '직장인 건강검진, 놓치면 과태료!',
        views: 2400,
        content: '직장 가입자는 1년 또는 2년에 한 번씩 국가건강검진을 받아야 합니다. 검진을 받지 않으면 사업주와 근로자 모두에게 과태료가 부과될 수 있으니, 병원에 미리 예약하고 꼭 받으세요.'
    },
    // ... (add 14 more health/medical posts)
    { id: 'p77', authorId: 'u5', category: 'health', title: '감기몸살, 약국에서 어떤 약을 사야 할까? (종합감기약)', views: 3100, content: '증상이 복합적일 때는 약사에게 증상을 설명하고 종합감기약을 추천받는 것이 좋습니다. 판피린, 판콜, 화이투벤 등이 유명합니다. 충분한 휴식이 가장 중요합니다.' },
    { id: 'p78', authorId: 'u14', category: 'health', title: '외국인도 국민건강보험 지역가입자로 의무 가입해야 하나요?', views: 2900, content: '한국에 6개월 이상 체류하는 모든 외국인은 국민건강보험 지역가입자로 의무 가입 대상입니다. 소득 및 재산에 따라 보험료가 산정되어 매달 고지서가 발송됩니다.' },
    { id: 'p79', authorId: 'u17', category: 'health', title: '치과 진료, 비보험(비급여) 항목은 왜 이렇게 비쌀까?', views: 2700, content: '충치 치료(레진, 인레이), 임플란트, 교정 등은 건강보험이 적용되지 않는 비급여 항목이라 비용 부담이 큽니다. 병원마다 비용이 다르므로 여러 곳에서 상담받아보는 것이 좋습니다.' },
    { id: 'p80', authorId: 'u1', category: 'health', title: '유학생 보험 vs 국민건강보험, 어떤 차이가 있나요?', views: 2200, content: '유학생 보험은 상해, 질병 치료비를 보장하는 실손 보험의 성격이 강하고, 국민건강보험은 병원비 일부를 공단에서 지원해주는 사회보험입니다. D-2 비자 소지자는 2021년부터 건보 의무가입 대상입니다.' },
    { id: 'p81', authorId: 'u11', category: 'health', title: '밤이나 휴일에 아플 때, "달빛어린이병원" 또는 응급실', views: 1900, content: '아이가 밤이나 휴일에 갑자기 아프다면 "달빛어린이병원"을 검색해보세요. 야간/휴일에도 소아청소년과 전문의에게 진료를 받을 수 있습니다. 증상이 심각하면 대학병원 응급실로 가야 합니다.' },
    { id: 'p82', authorId: 'u18', category: 'health', title: '정신과 진료, 기록이 남으면 비자 연장에 불이익이 있을까?', views: 3500, content: '단순 우울증이나 불면증 등으로 정신과 진료를 받는 것은 비자 연장에 아무런 영향을 미치지 않습니다. 정신 건강도 신체 건강만큼 중요하니, 힘들 때는 전문가의 도움을 받는 것이 좋습니다.' },
    { id: 'p83', authorId: 'u10', category: 'health', title: '여성 산부인과 검진, 부끄러워하지 마세요', views: 2100, content: '정기적인 산부인과 검진은 여성 건강을 위해 필수적입니다. 자궁경부암 검사(국가 지원), 초음파 검사 등을 통해 질병을 조기에 발견할 수 있습니다. 여의사 선생님이 있는 병원을 찾아보는 것도 방법입니다.' },
    { id: 'p84', authorId: 'u13', category: 'health', title: '한의원, 침/뜸/부항 치료도 건강보험 적용되나요?', views: 1800, content: '침, 뜸, 부항 등 기본적인 한방 치료는 건강보험이 적용되어 저렴하게 이용할 수 있습니다. 하지만 추나요법이나 한약 처방 등은 비급여 항목인 경우가 많습니다.' },
    { id: 'p85', authorId: 'u6', category: 'health', title: '코로나19 아직 안 끝났다! 증상 및 격리 기준', views: 1600, content: '코로나19는 감염병 등급이 하향되었지만, 여전히 주의가 필요합니다. 확진 시 격리 의무는 권고로 전환되었지만, 5일간 자율 격리를 권장하고 있습니다.' },
    { id: 'p86', authorId: 'u19', category: 'health', title: '피부과, 미용 시술 vs 질환 치료 비용 차이', views: 2300, content: '여드름, 아토피 등 질환 치료 목적의 진료는 건강보험이 적용되지만, 점 제거, 레이저 토닝 등 미용 목적의 시술은 모두 비급여 항목으로 비용이 비쌉니다.' },
    { id: 'p87', authorId: 'u3', category: 'health', title: '외국인 근로자 전용 병원/진료소 안내', views: 1700, content: '서울, 안산 등 외국인 밀집 지역에는 주말에 무료 또는 저렴한 비용으로 진료를 받을 수 있는 외국인 전용 의원이 있습니다. "라파엘클리닉" 등이 유명합니다.' },
    { id: 'p88', authorId: 'u9', category: 'health', title: '건강검진 결과, "고혈압 전단계"는 무슨 뜻인가요?', views: 2500, content: '정상 혈압과 고혈압의 중간 단계로, 생활 습관을 개선하지 않으면 고혈압으로 발전할 가능성이 높다는 경고 신호입니다. 식단을 조절하고 운동을 시작해야 합니다.' },
    { id: 'p89', authorId: 'u20', category: 'health', title: '산업재해 발생 시, 산재보험 처리 절차', views: 2800, content: '업무 중 다쳤다면 반드시 산업재해 처리를 해야 합니다. 회사에 알리고, 병원에서 산재보험으로 진료를 받아야 합니다. 회사가 거부할 경우 근로복지공단에 직접 신청할 수 있습니다.' },
    { id: 'p90', authorId: 'u4', category: 'health', title: '금연 클리닉, 보건소에서 무료로 금연 성공하기', views: 1400, content: '금연을 결심했다면 가까운 보건소 금연 클리닉에 등록하세요. 상담, 니코틴 보조제, 행동요법 등을 6개월간 무료로 지원받아 금연 성공률을 높일 수 있습니다.' },

    // Education & TOPIK (10 posts)
    {
        id: 'p91',
        authorId: 'u1',
        category: 'education',
        title: 'TOPIK II, 쓰기 54번 문제 고득점 전략',
        views: 4500,
        content: 'TOPIK 쓰기 54번은 가장 배점이 높은 문제입니다. 서론-본론-결론의 구조를 갖추고, 명확한 근거와 다양한 어휘/문법을 사용하는 것이 중요합니다. 예상 문제를 보고 개요를 짜는 연습을 꾸준히 해야 합니다.'
    },
    // ... (add 9 more education/TOPIK posts)
    { id: 'p92', authorId: 'u12', category: 'education', title: '한국 대학원 진학, 연구 계획서 작성법', views: 2200, content: '대학원 입시에서 연구 계획서는 매우 중요합니다. 지원하는 학과 교수의 연구 분야를 미리 파악하고, 자신의 학업 목표와 연구 방향을 구체적이고 논리적으로 서술해야 합니다.' },
    { id: 'p93', authorId: 'u8', category: 'education', title: '정부초청장학생(GKS) 선발 과정 및 혜택', views: 2800, content: 'GKS는 학비, 생활비, 항공권 등을 지원하는 최고의 장학금 프로그램 중 하나입니다. 학업 성적, 한국어/영어 능력, 추천서 등이 중요하며, 각국 대사관을 통해 선발됩니다.' },
    { id: 'p94', authorId: 'u10', category: 'education', title: '사이버대학교, 일하면서 학사 학위 취득하기', views: 1900, content: '사이버대학교는 100% 온라인으로 수업을 듣고 학위를 취득할 수 있어 직장인에게 인기가 많습니다. 등록금이 저렴하고 입학 문턱이 낮은 편입니다.' },
    { id: 'p95', authorId: 'u13', category: 'education', title: 'TOPIK 말하기 평가, 2024년부터 본격 시행!', views: 3200, content: 'IBT 기반의 TOPIK 말하기 평가가 도입되었습니다. 아직은 비자 등에 필수 요건은 아니지만, 앞으로 활용도가 높아질 것으로 예상됩니다. 자기소개, 그림 보고 묘사하기 등의 유형이 있습니다.' },
    { id: 'p96', authorId: 'u7', category: 'education', title: '한국어학당, 어느 대학교가 가장 좋은가요? (연세대 vs 서강대)', views: 3800, content: '어학당 선택 시에는 커리큘럼, 위치, 학비 등을 고려해야 합니다. 연세대는 체계적이고 학문적인 분위기, 서강대는 회화 중심의 수업으로 유명합니다. 개인의 목표에 따라 선택이 달라집니다.' },
    { id: 'p97', authorId: 'u15', category: 'education', title: '국가평생학습포털 "늘배움", 무료 온라인 강의', views: 1500, content: '늘배움 사이트에서는 IT, 인문교양, 취미 등 다양한 분야의 온라인 강의를 무료로 수강할 수 있습니다. 자기계발에 관심 있는 분들에게 추천합니다.' },
    { id: 'p98', authorId: 'u4', category: 'education', title: '내일배움카드, 외국인도 신청할 수 있나요?', views: 2600, content: 'F-2, F-4, F-5, F-6 등 특정 체류자격을 가진 외국인은 내일배움카드를 발급받아 국비 지원으로 직업 훈련을 받을 수 있습니다. 고용센터에 문의해보세요.' },
    { id: 'p99', authorId: 'u1', category: 'education', title: '대학교 "수강신청", 인기 강의는 1초 컷!', views: 2900, content: '한국 대학교의 수강신청은 매우 치열합니다. 서버 시간을 확인하고 PC방에 가는 등 성공적인 수강신청을 위한 학생들의 노력이 대단합니다. 실패하면 한 학기가 힘들어질 수 있습니다.' },
    { id: 'p100', authorId: 'u3', category: 'education', title: '석박사 통합과정, 장점과 단점', views: 2100, content: '석사 과정을 거치지 않고 바로 박사 학위를 목표로 하는 과정입니다. 시간을 단축할 수 있다는 장점이 있지만, 중도에 포기하면 학위가 남지 않는다는 단점도 있습니다. 신중하게 결정해야 합니다.' },
];

export let answers = [
    // Answers for p1
    { id: 'a1', postId: 'p1', authorId: 'u11', content: '정리 감사합니다. 올해부터 제조업 뿌리산업 경력 가점이 생겨서 저도 희망이 보이네요. 혹시 용접 기술사 자격증도 가점이 될까요?', accepted: false },
    { id: 'a2', postId: 'p1', authorId: 'u3', content: '네, 용접 기술사 자격증은 국가기술자격증으로 전문성을 인정받아 가점 항목에 포함될 수 있습니다. 관련 서류를 잘 준비해서 제출하세요.', accepted: true },
    { id: 'a3', postId: 'p1', authorId: 'u16', content: '저는 작년에 아슬아슬하게 떨어졌는데, 올해 쿼터가 늘어서 다시 도전해보려고 합니다. 다들 화이팅!', accepted: false },

    // Answers for p26
    { id: 'a4', postId: 'p26', authorId: 'u20', content: '안산역 근처에 직업소개소 많아요. 거기서도 일자리 알아볼 수 있습니다.', accepted: false },

    // Answers for p51
    { id: 'a5', postId: 'p51', authorId: 'u6', content: '안산 원곡동 다문화거리가 진짜 베트남 같아요. 없는 게 없어요.', accepted: true },
    { id: 'a6', postId: 'p51', authorId: 'u5', content: '요즘은 쿠팡 같은 온라인 쇼핑몰에서도 웬만한 베트남 소스는 다 팔더라고요. 편리해요.', accepted: false },

    // Answers for p91
    { id: 'a7', postId: 'p91', authorId: 'u1', content: '쓰기 진짜 너무 어려워요... 좋은 글 감사합니다. 매일 하나씩 써보는 연습을 해야겠어요.', accepted: false },
    { id: 'a8', postId: 'p91', authorId: 'u13', content: '고급 어휘를 사용하는 것도 중요하지만, 더 중요한 건 문법 오류를 줄이는 것입니다. 쉬운 단어라도 정확하게 쓰는 연습을 하세요.', accepted: true },
    
    // Add more answers for various posts
    { id: 'a9', postId: 'p4', authorId: 'u2', content: '베트남 현지에서 혼인신고할 때랑 한국에서 할 때랑 서류가 조금 다르더라고요. 꼼꼼하게 확인해야 두 번 일 안 해요.', accepted: false },
    { id: 'a10', postId: 'p5', authorId: 'u4', content: 'KIIP 5단계 이수했는데 F-2-7 점수 계산할 때 28점이나 줘서 정말 큰 도움이 됐어요. 무조건 하세요!', accepted: true },
    { id: 'a11', postId: 'p31', authorId: 'u11', content: '면접 마지막에 "궁금한 점 있나요?"라고 할 때 질문 안 하는 것도 안 좋게 본대요. 직무 관련 질문 1~2개는 준비해가는 게 좋은 것 같아요.', accepted: true },
    { id: 'a12', postId: 'p52', authorId: 'u9', content: '당근마켓 사기꾼도 가끔 있어요. 너무 싸게 나온 물건은 의심해봐야 해요. 그리고 무조건 직거래!', accepted: false },
    { id: 'a13', postId: 'p76', authorId: 'u10', content: '저는 작년에 깜빡하고 안 받았더니 회사에서 계속 받으라고 연락오더라고요. 올해는 미리 예약했습니다.', accepted: false },
    { id: 'a14', postId: 'p82', authorId: 'u12', content: '저도 유학 생활하면서 우울증 때문에 상담 받았었는데, 기록 같은 거 전혀 문제 없었어요. 오히려 마음이 편해져서 공부에 더 집중할 수 있었어요. 고민하지 마세요.', accepted: true },
    { id: 'a15', postId: 'p100', authorId: 'u8', content: '저는 석박통합과정인데, 지도교수님과 잘 맞는 게 정말 중요한 것 같아요. 중간에 교수님이랑 트러블 생기면 정말 힘들어져요.', accepted: false },
];

// This can be the initial state, which can be updated by login/logout functions
export let currentUser = null; 

// Example questions for the homepage suggestion list
export const exampleQuestions = [
    "E-7-4 비자 최신 변경사항",
    "F-2-R 비자 신청 자격",
    "D-10 비자 변경 주의사항",
    "사회통합프로그램 5단계 혜택",
    "안산/시흥 용접 일자리",
    "베트남 개발자 한국 취업",
    "이력서 사진 잘 찍는 법",
    "평택 반도체 공장 취업",
    "베트남 식료품 파는 곳",
    "당근마켓 사기 예방법",
    "쓰레기 분리수거 팁",
    "알뜰폰 요금제 추천",
    "직장인 건강검진 필수인가요?",
    "정신과 진료 기록 불이익",
    "TOPIK 쓰기 고득점 방법",
    "한국 대학원 연구계획서",
];

/**
 * Simulates fetching all posts.
 * In a real app, this would be an API call.
 * @returns {Promise<Array>} A promise that resolves to the posts array.
 */
export const fetchPosts = async () => {
    // Simulate network delay
    await new Promise(res => setTimeout(res, 200));
    return posts;
};

/**
 * Simulates fetching a single post by its ID.
 * @param {string} postId The ID of the post to fetch.
 * @returns {Promise<Object|null>} A promise that resolves to the post object or null if not found.
 */
export const fetchPostById = async (postId) => {
    await new Promise(res => setTimeout(res, 100));
    const post = posts.find(p => p.id === postId);
    if (!post) return null;

    // Find the author and answers for the post
    const author = users.find(u => u.id === post.authorId);
    const postAnswers = answers
        .filter(a => a.postId === postId)
        .map(answer => {
            const answerAuthor = users.find(u => u.id === answer.authorId);
            return { ...answer, author: answerAuthor };
        })
        .sort((a, b) => (b.accepted - a.accepted)); // Show accepted answer first

    return { ...post, author, answers: postAnswers };
};

/**
 * Simulates fetching posts by category.
 * @param {string} category The category to filter by.
 * @returns {Promise<Array>} A promise that resolves to the filtered posts array.
 */
export const fetchPostsByCategory = async (category) => {
    await new Promise(res => setTimeout(res, 200));
    if (category === 'all') {
        return posts;
    }
    return posts.filter(p => p.category === category);
};

/**
 * Simulates user login.
 * @param {string} userId The ID of the user to log in.
 * @returns {Object} The logged in user object.
 */
export const login = (userId) => {
    currentUser = users.find(u => u.id === userId);
    return currentUser;
};

/**
 * Simulates user logout.
 */
export const logout = () => {
    currentUser = null;
};

/**
 * Gets the current logged-in user.
 * @returns {Object|null} The current user object or null.
 */
export const getCurrentUser = () => {
    return currentUser;
};

/**
 * Adds a new answer to a post.
 * @param {string} postId The ID of the post to add the answer to.
 * @param {string} content The content of the answer.
 * @returns {Promise<Object>} The new answer object.
 */
export const addAnswer = async (postId, content) => {
    await new Promise(res => setTimeout(res, 300));
    if (!currentUser) {
        throw new Error("User not logged in.");
    }
    const newAnswer = {
        id: `a${answers.length + 1}`,
        postId,
        authorId: currentUser.id,
        content,
        accepted: false,
        author: currentUser,
    };
    answers.push(newAnswer);
    return newAnswer;
};

/**
 * Searches posts by a keyword in title and content.
 * @param {string} keyword The keyword to search for.
 * @returns {Array<Object>} A list of top 3 matching posts with a summary.
 */
export const searchPostsByKeyword = (keyword) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const results = posts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseKeyword) ||
        post.content.toLowerCase().includes(lowerCaseKeyword)
    );
    // Return top 3 results with summary
    return results.slice(0, 3).map(post => ({
        id: post.id,
        title: post.title,
        summary: post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' // Remove HTML and truncate
    }));
};

/**
 * Creates a new post.
 * @param {string} title The title of the post.
 * @param {string} content The content of the post.
 * @returns {Promise<Object>} The new post object.
 */
export const createPost = async (title, content) => {
    await new Promise(res => setTimeout(res, 300));
    if (!currentUser) {
        throw new Error("User not logged in.");
    }
    const newPost = {
        id: `p${posts.length + 1}`,
        authorId: currentUser.id,
        category: 'general', // Default category
        title,
        content,
        views: 0,
        author: currentUser,
        answers: [],
    };
    posts.unshift(newPost); // Add to the beginning of the array
    return newPost;
};
