let outpEl=document.getElementById('outp')

function ppt(){
    const suraha=['surah الفاتحہ','surah البقرہ','surah آل عمران','surah النساء','surah المائدہ','surah الأنعام','surah الأعراف','surah الأنفال',
    'surah التوبہ','surah یونس','surah ہود',' surahیوسف','surah مریم','surah الرعد','surah ابراہیم','surah الحجر','surah النحل',
    'surah الإسراء','surah الکہف','surah طہ','surah الانبیاء','surah الحج','surah المؤمنون','surah النور','surah الفرقان',
    'surah الشعراء','surah النمل','surah  القصص','surah العنکبوت','surah الروم','surah لقمان','surah السجدہ','surah الأحزاب',
    'surah سبا','surah فاطر','surah یٰس','surah الصافات','surah ص','surah الزمر','surah غافر','surah فصلت','surah الشوریٰ','surah الزخرف',
    'surah الدخان','surah الجاثیہ','surah الاحقاف','surah محمد','surah الفتح','surah الحجرات','surah ق','surah الذاریات',
    'surah الطور','surah النجم','surah القمر','surah الرحمن','surah الواقعہ','surah الحدید','surah المجادلہ','surah الحشر ',
    'surah الممتحنہ','surah الصف','surah الجمعہ','surah المنافقون','surah التغابن','surah الطلاق','surah التحریم','surah الملک',
    'surah القلم','surah الحاقہ','surah المعارج','surah نوح','surah الجن','surah المزمل','surah المدثر','surah القیامہ',
    'surah الانسان','surah المرسلات','surah النبا','surah النازعات','surah عبس','surah التکویر','surah الانفطار','surah المطففین',
    'surah الانشقاق','surah البروج','surah الطارق','surah الأعلى','surah الغاشیہ','surah الفجر','surah البلد',
    'surah الشمس','surah اللیل','surah الضحیٰ','surah الشرح','surah التین','surah العلق','surah القدر','surah البینہ','surah الزلزلہ',
    'surah العادیات','surah القارعہ','surah التکاثر','surah العصر','surah الہمزہ','surah الفیل','surah قریش','surah الماعون',
    'surah الکوثر','surah الکافرون','surah النصر','surah المسد','surah الإخلاص','surah الفلق','surah الناس']
    let inpt=document.getElementById('Quran').value;
    outpEl.innerHTML='';
    for (let index=0; index<suraha.length; index++){
        outpEl.innerHTML=suraha[inpt]
    }

}