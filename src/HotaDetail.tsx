import {Carousel,type Slide} from './Media31';
import {asset} from './content/resources';
import './hota-v5.css';

const photos:Slide[]=[
  {
    "id": "opening",
    "title": "HAP實習生始業式首圖2",
    "type": "image",
    "url": "media/hota-v5/opening.webp"
  },
  {
    "id": "visit",
    "title": "新五股參訪1",
    "type": "image",
    "url": "media/hota-v5/visit.webp"
  },
  {
    "id": "award",
    "title": "HAP計畫成果第二名",
    "type": "image",
    "url": "media/hota-v5/award.webp"
  },
  {
    "id": "unboxing",
    "title": "HAP開箱計畫首獎",
    "type": "image",
    "url": "media/hota-v5/unboxing.webp"
  },
  {
    "id": "photo-05",
    "title": "4",
    "type": "image",
    "url": "media/hota-v5/photo-05.webp"
  },
  {
    "id": "photo-06",
    "title": "HAP 與總經理合照",
    "type": "image",
    "url": "media/hota-v5/photo-06.webp"
  },
  {
    "id": "photo-07",
    "title": "HAP計畫首圖",
    "type": "image",
    "url": "media/hota-v5/photo-07.webp"
  },
  {
    "id": "photo-08",
    "title": "LINE_ALBUM_202673和運HAP實習生始業式_260908_1",
    "type": "image",
    "url": "media/hota-v5/photo-08.webp"
  },
  {
    "id": "photo-09",
    "title": "_A3教育訓練_260908_1",
    "type": "image",
    "url": "media/hota-v5/photo-09.webp"
  },
  {
    "id": "photo-10",
    "title": "和運HAP實習生PDCA_2(1)",
    "type": "image",
    "url": "media/hota-v5/photo-10.webp"
  },
  {
    "id": "photo-11",
    "title": "和運HAP實習生PDCA_260908_1",
    "type": "image",
    "url": "media/hota-v5/photo-11.webp"
  },
  {
    "id": "photo-12",
    "title": "新五股參訪",
    "type": "image",
    "url": "media/hota-v5/photo-12.webp"
  },
  {
    "id": "photo-13",
    "title": "職涯分享交流",
    "type": "image",
    "url": "media/hota-v5/photo-13.webp"
  },
  {
    "id": "photo-14",
    "title": "職涯分享交流_A3教育訓練",
    "type": "image",
    "url": "media/hota-v5/photo-14.webp"
  },
  {
    "id": "photo-15",
    "title": "職涯分享交流_A3教育訓練_2",
    "type": "image",
    "url": "media/hota-v5/photo-15.webp"
  },
  {
    "id": "photo-16",
    "title": "職涯分享交流_A3教育訓練_3",
    "type": "image",
    "url": "media/hota-v5/photo-16.webp"
  }
];
const links=[
  ['外籍人力任用方案','media/hota-v5/foreign-talent-public.pdf'],
  ['識別證優化方案','media/hota-v5/id-card-complete.pdf'],
  ['好文分享','media/hota-v5/knowledge-sharing.png'],
  ['和運租車 LinkedIn','https://www.linkedin.com/company/111831357/'],
];

export default function HotaDetail(){return <div className="hota-v5">
  <section className="evidence31" aria-label="和運實習成果">
    <Carousel items={photos} label="和運實習成果" controls={false}/>
    <div className="hota-v5-links">{links.map(([title,url])=><a className="cta31" key={url} href={url.startsWith('https:')?url:asset(url)} target="_blank" rel="noopener noreferrer">{title} ↗</a>)}</div>
  </section>
  <img className="hota-v5-hap" src={asset('media/hota-v5/hap.png')} width="1672" height="941" alt="HAP 計畫收穫：HORIZON 拓展視野、ACTION 投入實作、PEOPLE 感謝相遇" loading="lazy"/>
  <article className="article31-body">
    <h2>HAP暑期實習計畫｜從看見、做到真正理解</h2>
    <section><h3>H｜HORIZON 拓展視野</h3>
      <p>剛進入 HAP 時，我對人資工作的理解，多半來自課堂、職務介紹與過去的想像。真正走進企業後，我才開始看見，一項人資工作背後其實連結著不同部門、制度、成本與營運需求。從部門分享、產業認識，到實際參與不同專案，我開始理解人資並不是獨立運作的職能，而是必須站在企業整體的角度，思考「公司現在需要什麼」、「這件事為什麼要做」，以及人資可以在其中扮演什麼角色。</p>
    </section>
    <section><h3>A｜ACTION 投入實作</h3>
      <p>真正讓我學得最多的，是開始自己動手做。這段時間，我接觸外籍人才合作、HR Operations、流程改善、內部溝通與雇主品牌等不同任務。從資料盤點、跨單位確認、法規與方案比較，到成本效益分析與成果整理，我慢慢發現，工作不是找到一個答案就結束，而是不斷確認需求、拆解問題，再把資訊整理成真正能執行的方案。</p>
      <p>我也開始養成多問一步的習慣：<strong>現在為什麼這樣做？真正的問題在哪裡？有沒有更好的做法？</strong></p>
      <p>Excel、Power Query、SharePoint、AI 等工具，也因此不再只是「會不會使用」的問題，而是思考它們可以放在哪一段流程裡，真正解決什麼問題。</p>
    </section>
    <section><h3>P｜PEOPLE 感謝相遇</h3>
      <p>而這段實習讓我感受最深的，還有人。很多我原本不知道怎麼處理的事情，都是在一次次提問、討論、被提醒與重新修改的過程中慢慢學會的。主管與同事分享的不只是「這件事怎麼做」，更多時候是他們判斷事情的方法、看問題的角度，以及實際工作多年累積下來的經驗。</p>
      <p>我也因此更理解，職場上的學習並不是自己一個人把事情做到最好，而是願意傾聽、溝通、接受回饋，也知道什麼時候需要尋求協助。</p>
    </section>
    <section className="hota-v5-reflection"><h2>走進人資實務之後</h2>
      <p>真正進入人資現場後，我最大的感受是：<strong>人資比我原本想像得更貼近「問題解決」。</strong></p>
      <p>以前我會把人資理解成招募、訓練、薪酬、員工關係等不同職能；但實際工作後，我開始看到的是一條條真實的工作流程——一個需求從哪裡出現、有哪些人會受到影響、資訊怎麼流動、制度怎麼被執行，以及哪些地方可能產生落差。</p>
      <p>我也發現自己真正有興趣的，不只是「把人資工作做好」，而是去理解一份工作<strong>為什麼這樣被設計，以及有沒有可能被重新設計得更好。</strong></p>
      <p>這段實習讓我從「執行一項任務」，慢慢走到「先問目的 WHY」。</p>
      <p>未來希望持續探索 <strong>HR × Data × Process × Technology</strong> 的交會點，把人資實務、資料整理、流程設計與科技工具放在同一個問題裡思考。</p>
    </section>
  </article>
</div>}
