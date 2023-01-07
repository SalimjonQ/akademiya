import faxriy from "../images/faxriyla.jpg";
import newYear from "../images/newyear.jpg";
import minister from "../images/console-adham.jpg";
import boll from "../images/boll.jpg"

export default function News() {
    return(
        <div className="news">
            <h1>Futbol akademiyasidagi so'ngi yangiliklar</h1>
            <div className="news-item">
                <h3>Yangi yil shukuhi</h3>
                <div className="news-list">
                    <div className="news-img">
                        <img src={newYear} alt="Yangi yil" />
                    </div>
                    <p>Navoiy viloyat bolalar-o‘smirlar futbol akademiyasi (mahorat maktabi)da Yangi 2023 yilni munosib kutib olish maqsadida "Quvnoq yangi yil" deb nomlangan bayram tadbiri tashkil etildi. Tadbirda Qorbobo, Qorqiz,Yangi yil, Eski yil, Yalmog‘iz mehmon bo'lib bolajonlar qalbiga quvonch olib kirdi. Tadbir davomida o'quvchilar tomonidan mavzuga oid she'rlar, qo‘shiqlar, qiziqarli hangomalar namoyish etildi.
                    </p>
                </div>
            </div>
            <div className="news-item">
                <h3>Faxriylar taqdirlandi</h3>
                <div className="news-list">
                    <div className="news-img">
                        <img src={faxriy} alt="faxriylar" />
                    </div>
                    <p>Futbol akademiyasi rivoji uchun xissa qo'shgan Navoiy viloyat futbol akademiyasi nafaqadagi xodimlar holidan xabar olindi va futbol akademiyasi direktori tashakkur nomasi bilan taqdirlanib bayram sovg'alari topshirildi.
                    </p>
                </div>
            </div>
            <div className="news-item">
                <h3>Yoshlar siyosati va sport vazirligi rahbariyati tanishtirildi</h3>
                <div className="news-list">
                    <div className="news-img">
                            <img src={minister} alt="faxriylar" />
                    </div>
                    <p>Xabar berilganidek, O'zbekiston Respublikasi Prezidentining tegishli farmoniga binoan O'zbekiston Respublikasi Yoshlar siyosati va sport vazirligining rahbariyati tayinlandi.
                    Farmonga binoan O'zbekiston Respublikasi yoshlar siyosati va sport vaziri etib Adkham Ilhamovich Ikramov,
                    O'zbekiston Respublikasi yoshlar siyosati va sport vazirining birinchi o'rinbosari - Yoshlar ishlari agentligi direktori etib Sadullayev Alisher Zafar o'gli tayinlandi
                    Yoshlar siyosati va sport vazirligi rahbariyatini tanishtirish tadbirida O‘zbekiston Respublikasi Prezidentining yoshlar, fan, ta'lim, sog‘liqni saqlash, madaniyat va sport masalalari bo‘yicha maslahatchisi Abdurahmanov Odil Qalandarovich ishtirok etdi.
                    </p>
                </div>
            </div>
            <div className="news-item">
                <h3>Yangi vazirlik</h3>
                <div className="news-list">
                    <div className="news-img">
                        <img src={minister} alt="faxriylar" />
                    </div>
                    <p>Oʻzbekiston Respublikasi Prezidentining Farmoni bilan Adham Ilhamovich Ikramov Oʻzbekiston Respublikasi Yoshlar siyosati va sport vaziri lavozimiga tayinlandi.
                    Oʻzbekiston Milliy Olimpiya qoʻmitasi mamlakatimizdagi Olimpiya oilasi nomidan Adham Ilhamovichni masʼuliyatli lavozimga tayinlangani bilan tabriklab, kelgusi faoliyatida ham ulkan muvaffaqiyatlar tilaydi.
                    </p>
                </div>
            </div>
            <div className="news-item">
                <h3>Yil sarhisobi</h3>
                <div className="news-list">
                    <div className="news-img">
                        <img src={boll} alt="faxriylar" />
                    </div>
                    <p>Navoiy viloyat bolalar-o‘smirlar futbol akademiyasi (mahorat maktabi)da bugun 2021-2022 o'quv yil uchun yil sar hisobi bo'lib o'tdi. Taklif etilgan mexmonlar Qizilqum Professional Futbol Klubidan Alisher Xalikov va Farxod Nurullayev, Navoiy futbol assosiatsiyasi birinchi vitsa prizidenti Davronov Dilmurod hamda Navoiy futbol assosiatsiyasi texnik direktori Ixtiyor Nurullayevlar va ota - onalar hamda futbol jamoatchiligi a'zolari sharif buyurdi. Birinchi so'zni Navoiy futbol akademiyasi direktori Akmaljon Kenjayev ochib berdi so'ngra sport ishlari bo'yicha derektor o'rinbosari , ma'naviyat va ma'rifat ishlari bo'yicha direktor o'rinbosari futbol akademiyasi shifokori hamda futbol akademiyasi bo'lim boshlig'i katta uslubchilari o'z yo'nalishlari bo'yicha yillik hisobotlarini topshirishdi. Yil davomoda akademiya rivojiga qo'shgan hissalari uchun tashakkurnoma bilan taqdirlandilar.
                    </p>
                </div>
            </div>
        </div>
    )
}