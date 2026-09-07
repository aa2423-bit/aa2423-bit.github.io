from pathlib import Path
from PIL import Image,ImageOps
import subprocess,json
root=Path(r'C:\Users\Swift\Desktop\Anna-Digital-Portfolio')
dest=Path('public/images')
photos={
'anna-hero':'01_Master-Profile/首頁封面大頭照.jpg',
'v2-sel':'04_Work_工作經驗/打工/偏鄉中心/講座培訓.jpg',
'v2-capstone':'02_Capstone_畢業專題/畢業專題/專題.jpg',
'v2-leadership':'05_Leadership_幹部經驗/宿舍幹部/榮譽大會上台會報.jpg',
'v2-camp2026':'06_Camps_營隊經驗/營隊經驗/線上伴讀2026年聯合相見歡/國小組.jpg',
'v2-camp2024':'06_Camps_營隊經驗/營隊經驗/112-2學期莿桐書屋夏日學堂/書屋合照.jpg'}
audit=[]
for name,rel in photos.items():
 p=root/rel
 if not p.exists():
  print('MISSING',rel);continue
 im=ImageOps.exif_transpose(Image.open(p)).convert('RGB');im.thumbnail((1000,1000));im.save(dest/(name+'.webp'),quality=88)
 audit.append({'image':name,'source':str(p)})
pdf=root/'01_Academics_課程與成績/課程/大三/產業管理研討-楊君琦、林瑩滋教授/產業研討_智慧零售.pdf'
poppler=r'C:\Users\Swift\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe'
if pdf.exists():
 subprocess.run([poppler,'-f','1','-l','1','-singlefile','-png','-scale-to','1000',str(pdf),'qa/v2-retail'],check=True)
 Image.open('qa/v2-retail.png').convert('RGB').save(dest/'v2-retail.webp',quality=90)
 audit.append({'image':'v2-retail','source':str(pdf),'page':1})
else: print('MISSING',pdf)
Path('qa/v2-asset-sources.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf-8')
print('Prepared',len(audit),'specified assets')
