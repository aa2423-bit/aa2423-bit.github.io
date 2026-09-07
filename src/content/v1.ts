export const socials=[{label:'LinkedIn',url:'https://www.linkedin.com/in/annalearner/'},{label:'GitHub',url:'https://github.com/aa2423-bit'},{label:'Email',url:'mailto:aa411382423@gmail.com'}];
export const about=[
'我主修企業管理，輔修財經法律，並修習企業財稅學分學程。個性外向親和、主動學習，也喜歡從不同領域理解問題。從第一線服務、偏鄉教育，到招募實作、大型活動與跨域專案，我逐步累積以同理心理解需求、整合資訊，並把想法落實成具體行動的能力。',
'我對「人與組織如何彼此影響」特別有興趣，也希望自己不只理解人的需求，更能理解企業、流程與資料之間的關係。過去在招募、教育訓練、研究分析、專案統籌與團隊協作中，我逐漸確認自己喜歡研究問題、整理資訊、跨域溝通，並把方案真正推進落地。',
'目前我持續深化 Talent Acquisition、Learning & Development、Research & Analysis 等實作能力，也關注 HR Digitalization 與 AI-assisted Workflow。未來希望成為能理解企業與員工需求、結合 HR 專業與數位工具改善流程，並能跨 HR × Business × Technology 協作的人。'];
export const work=[
{company:'和運租車 Hota Leasing',role:'Management Division Intern',period:'2026 – Present',text:'Current internship · Documentation in progress.'},
{company:'輔仁大學台灣偏鄉教育關懷中心',role:'Program Assistant / 約聘助理',period:'113–115 學年度相關實作',text:'從招募、培訓與學習設計，到內容記錄與帶班協調，支持大學生投入偏鄉教育。',path:'Talent Attraction → Onboarding & Training → Learning Design → Employer Branding → Program Operations',facts:['每學期招募 100+ 位大學生，約滿足 70% 人力需求。','113–115 學年度共 4 場教育訓練。','114–115 學年度 SEL：4 支培訓影片、1 場月講座協調。','每批約 60 組線上學伴，協調帶班及學習需求。'],link:'/projects/sel'},
{company:'亞瑞特數位社群行銷有限公司',role:'Recruiting Part-time',period:'2025.07 – 2025.08',text:'支援履歷篩選、候選人聯繫與面試安排。',facts:['每日處理 30–50 份履歷；每週安排約 5 場面試。','面試轉換率約 75%，協助補足 1 個職缺。']},
{company:'全家便利商店 全家便利商店',role:'High-level Service Staff',period:'2023.04 – Present',text:'訂購、收貨與庫存管理、顧客服務、每日對帳，並經營約 200 人的團購群組。從門市流程累積第一線觀察，再帶進智慧零售研究。',link:'/projects/smart-retail'},
{company:'敦煌書局校園店',role:'校園門市工作',period:'2023.02 – 2025.09',text:'協助書籍整理、庫存、收銀與顧客需求回應，理解校園書店的日常營運。'},
{company:'黃漢邦數學教室',role:'Phone Outreach',period:'2019.06 – 2020.09',text:'每日約 50 通電話聯繫，練習清楚表達、回應需求與溝通。'}];
type ProjectSummary={slug:string;title:string;subtitle:string;category:string;role:string;context:string;outcome:string;image?:string;alt:string;sections?:{title:string;text:string;items?:string[]}[]};
export const projects:ProjectSummary[]=[
{slug:'hrfriday',title:'HRFriday｜第六屆高潛學員招募專案',subtitle:'招募流程規劃與執行',category:'招募實務',role:'招募專案副召集人',context:'在系統化的人資學習中累積觀點，再把方法帶進下一屆高潛學員的招募專案。',outcome:'團隊成果：41 份申請 → 20 位面試 → 12 位錄取。',alt:'',sections:[{title:'從學員，到招募專案副召',text:'第五屆高潛學習，讓我接觸招募選才、訓練發展、勞動法規與科技人資等面向；第六屆招募實作則讓方法落在具體流程中。'},{title:'把招募流程串起來',text:'參與招募規劃、時程與訊息設計，負責候選人溝通並與團隊共同推進。',items:['招募計畫與任務協調','招募訊息及對外溝通','履歷篩選與面試時程安排','面試評估參與、通知與現場執行','跨組協作']},{title:'團隊招募成果',text:'41 份申請、20 位進入面試、12 位錄取。這是團隊招募成果；我的角色是協調與參與執行，也從過程中理解候選人體驗與流程一致性。'}]},
{slug:'terra',title:'人力資源管理｜Terra 模擬企業',subtitle:'課堂模擬企業招募實作',category:'課堂模擬企業',role:'招募專員',context:'人力資源管理課程的學生模擬企業：從組織與職位需求出發，練習建立招募流程。',outcome:'撰寫 JD、履歷篩選、面試安排與通知，應用信度及效度思考。課程成績 91 分。',image:'terra-document',alt:'Terra 人力資源管理招募簡報原始封面'},
{slug:'smart-retail',title:'產業管理研討｜智慧零售研究',subtitle:'從便利商店第一線，走進產業研究。',category:'產業研究',role:'產業定義、供應鏈、趨勢應用與未來展望研究',context:'把 全家便利商店 的實務觀察帶進產業管理研討，第一次有架構地界定產業、整理資料與提出洞察。',outcome:'學習定義研究邊界、整理資料並轉化成可支持結論的資訊。',image:'smart-retail-document',alt:'智慧零售研究簡報的便利商店供應鏈架構'},
{slug:'bamboo-tea',title:'組織學習與社會探究｜竹峰茗茶 × 社企永續聚落',subtitle:'社企永續聚落外部合作',category:'永續與外部合作',role:'專案行程、訪談安排、拍攝規劃、現場推廣與內容製作',context:'第三屆社企永續聚落的跨域合作，從茶園參訪、行程與訪談安排、拍攝規劃，到現場推廣。',outcome:'團隊營業額約 6,000 元，原目標約 3,100 元。',image:'bamboo-tea',alt:'第三屆社企永續聚落竹峰茗茶團隊合照'},
{slug:'sel',title:'偏鄉中心｜SEL 教材與培訓設計',subtitle:'教育訓練、學習內容設計與培訓執行',category:'教育訓練與內容設計',role:'SEL 教材簡報、內容製作與培訓協調',context:'輔大偏鄉中心 教材與培訓實作：整理教材、錄製內容，並支持現場訓練。',outcome:'4 支培訓影片、1 場 SEL 月講座協調，累積內容設計、簡報、溝通與影片剪輯經驗。',alt:''},
{slug:'capstone',title:'畢業專題｜AI 時代下人才發展與適應策略',subtitle:'AI 時代下人才發展與適應策略',category:'AI 與人才發展研究',role:'文獻整理、研究架構、問題聚焦與概念整合',context:'全職工作者 AI 焦慮與接受對工作生活平衡與績效表現之探討。2025.02–12 的畢業專題研究。',outcome:'團隊研究規模：347 份有效問卷與 10 位跨產業決策主管及人資專業人士訪談。',image:'capstone-document',alt:'畢業專題研究假設架構，呈現 AI 焦慮、接受、工作生活平衡與績效之研究關係',sections:[{title:'研究問題',text:'AI 時代下人才發展與適應策略：全職工作者 AI 焦慮與接受對工作生活平衡與績效表現之探討。研究關注技術進入工作後，人的感受、適應與員工體驗。'},{title:'我的貢獻',text:'參與文獻整理、研究架構討論、問題聚焦及概念整合，把不同概念整理成可以繼續探討的研究問題。'},{title:'把研究連回人才發展',text:'研究讓我同時思考工具、企業需求與工作者的處境，累積資料整理、概念整合與研究表達的經驗。研究假設與方法可從公開節選簡報深入了解。'}]}
];
