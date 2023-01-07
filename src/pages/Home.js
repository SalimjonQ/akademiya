import console from '../images/console.jpg'
import CarouselFadeExample from '../components/Carousel'

export default function Home() {
    return (
        <div className="home-page">
            <h1>Navoiy viloyat futbol mahorati maktabi</h1>
            <div className="content">
                    <h3> O'zbekiston Respublikasi Vazirlar Mahkamasi tomonidan Akademiyaning asosiy vazifalari etib quyidagilar belgilanadi:</h3>
                <div className="content-one">
                    <div className="img-section">
                        <img src={console} alt="jamoa logosi" className="teamLogo"/>
                    </div>
                    <div className="text-section">
                        <p> Futbol bo‘yicha yuqori iqtidorga ega bo‘lgan yosh futbolchilarni saralab olish (seleksiya) tizimi, ularni o‘qitish, tarbiyalash  va individual xususiyatlarini rivojlantirish, futbol sohasidagi sport qobiliyatini shakllantirish;
                        </p>
                        <p> Bolalar-o‘smirlar futbolini rivojlantirish uchun ishonchli zaxirani shakllantirish, iste'dodli va iqtidorli bolalarni futbolga jalb etish va futbol bo‘yicha salohiyatini doimiy ravishda o‘stirib borish, ularda sog‘lom turmush tarziga intilishni uyg‘otish;
                        </p> 
                        <p> Professional futbolchilarni tayyorlash tizimini tashkil etish, yurtimiz futbolini futbol rivojlangan mamlakatlar bilan xalqaro darajada raqobat qiladigan darajaga yetkazish, turli yosh toifasidagi respublika terma jamoalari va professional futbol jamoalariga yetuk futbolchilarni tayyorlash;
                        </p>
                        <p> Futbol rivojlangan xalqaro mamlakatlarda o‘tkaziladigan musobaqalar va o‘quv-mashg‘ulot yig‘inlarida ishtirok etish orqali respublika akademiya o‘quvchilarining professional saviyasini oshirib borish;
                        </p>
                        <p> Futbol sohasida sport qobiliyatini shakllantirishga va to‘liq darajada amalga oshirishga ko‘maklashuvchi muhit yaratish, akademiya negizida O‘zbekistonning futbol bo‘yicha turli yosh toifasidagi terma jamoalarini shakllantirish.</p>
                    </div>
                </div>
                    <h3>Futbol Akademiyasi erishgan yutuqlar</h3>
                <div className="content-two">
                    <div className="img-section">
                        <CarouselFadeExample/>
                    </div>
                    <div className="text-section">2022 yilning 21-27 noyabr kunlari Toshkent viloyatida 2010 yilda tug'ilgan bolalar o'rtasidagi "Professional futbol maktablari ligasi" O'zbekiston kubogi musobaqasi o'tkazildi. Quyida faxrli ikkinchi o'rinni olgan Navoiy viloyati bolalar-o'smirlar futbol akademiyasi (mahorat maktabi)ning U-12 guruh tarbiyalanuvchilarini kutib olish marosimidan foto lavhalarni ko'rishingiz mumkin.</div>
                </div>
            </div>
            
        </div>
    )
}