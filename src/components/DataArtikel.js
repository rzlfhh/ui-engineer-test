import artikelimage from "../images/artikel-img.png";
import avatar from "../images/avatar.svg";
import adam from "../images/adam.png";

const dataArtikel = [
    {
        id: 1,
        avatar: avatar,
        name: "Nida Regita F",
        title: "4+ Cara Mudah Cek IP Hosting Website",
        description:
            "Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting ...",
        category: "Hosting",
        date: "28 Dec 2021",
        readtime: "5 min read",
        artikelimg: artikelimage,
        like: 111,
        p1: "Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat!",
        p2: "IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting website.Dengan IP tersebut, website Anda dapat dikenali dan diakses melalui jaringan internet.",
        p3: "Saat Anda mengakses website, Anda memang tidak bisa melihat IP secara langsung.Alasannya, IP tersebut sudah diwakili oleh sebuah domain agar lebih mudah diingat.",
        p4: " Kalau begitu, bagaimana cara mengetahui hosting IP suatu website? Yuk, simak panduan lengkap cara cek IP web hosting di bawah ini!",
        subhead1: "Cara Cek IP Hosting",
        step: ["Melihat IP Hosting pada Email Informasi Akun Hosting", "Melihat IP Hosting Melalui Member Area Niagahoster", "Melihat IP Hosting Melalui cPanel", "Mengecek IP Menggunakan CMD", "Mengecek IP dengan Web-based Tools"],
        subhead2: "1. Melihat IP Hosting pada Email Informasi Akun Hosting",
        contenthead2: "Ketika Anda membeli layanan hosting, pihak penyedia hosting akan mengirimkan email berupa informasi detail akun hosting Anda. Pada email ini, Anda bisa cek IP di bagian Informasi Akun seperti ini:",
        subhead3: "Kesimpulan",
        kesimpulan1: "Nah, itu dia beberapa cara yang bisa Anda coba untuk mengecek hosting IP website. Mulai dari melihat IP pada email yang dikirimkan ketika Anda berhasil melakukan order hosting hingga cek IP hosting dengan bantuan aplikasi website.",
        kesimpulan2: "IP hosting merupakan deretan angka yang tentu sulit untuk diingat.Itulah kenapa penggunaan domain website bisa solusi terbaik demi kemudahan.Namun, pastikan nama domain terbaik yang digunakan, ya.",
        kesimpulan3: "Untungnya, Anda bisa membeli domain unik dengan mudah dari penyedia hosting di Indonesia seperti Niagahoster.",
        kesimpulan4: "Bahkan, di Niagahoster, Anda bisa mendapatkan domain gratis jika berlangganan hosting di hampir semua paket yang ditawarkan dengan durasi tertentu.",
        kesimpulan5: "Tak hanya itu, Anda bisa juga menambahkan banyak domain pada akun hosting Anda berkat fitur Unlimited Addon Domain.Itu pun masih ditambah dengan SSL gratis yang bisa digunakan untuk menjaga keamanan website Anda.",
        kesimpulan6: "Menariknya, semua layanan tersebut bisa Anda dapatkan dengan harga mulai dari Rp21rb/ bulan saja.Harga yang cukup murah untuk fitur canggih dan layanan berkualitas, bukan ?",
        kesimpulan7: "Jadi, tunggu apa lagi ? Yuk, dapatkan domain gratis dengan berlangganan web hosting Niagahoster sekarang!",

        commentsartikel: [
            {
                id: 1,
                name: "Adam Muiz",
                avatar: adam,
                time: "29 hari yang lalu",
                comment: "makasih kak udah berbagi informasi hehe",
                replies: [],
                like: [],
            },
            {
                id: 2,
                name: "Adam Muiz",
                avatar: adam,
                time: "29 hari yang lalu",
                comment: "Lagi coba host-tracker trial 30 day, bisa mantau uptime webiste, cukup membantu. Sebenarnya kalau mantau juga bisa pakai JetPack, cuma karena berhubung pluginnya berat jadi cari alternatif lain buat pantau.",
                replies: [],
                like: [],
            },
            {
                id: 3,
                name: "Adam Muiz",
                avatar: adam,
                time: "29 hari yang lalu",
                comment: "kalau untuk cek kesehatan websitenya sendiri bagaimana gan ?",
                replies: [
                    {
                        id: 1,
                        name: "Adam Muiz",
                        avatar: adam,
                        time: "29 hari yang lalu",
                        role: "Author",
                        comments: "Bisa melakukan pengecekan melalui Urlvoid atau fitur secamanya, bisa juga melalui google di url http://www.google.com/safebrowsing/diagnostic site=namasiteanda",
                    },
                ],
                like: [],
            },
            {
                id: 4,
                name: "Adam Muiz",
                avatar: adam,
                time: "29 hari yang lalu",
                comment: "Lagi coba host-tracker trial 30 day, bisa mantau uptime webiste, cukup membantu. Sebenarnya kalau mantau juga bisa pakai JetPack, cuma karena berhubung pluginnya berat jadi cari alternatif lain buat pantau.",
                replies: [],
                like: [],
            },
        ],

    },
    {
        id: 2,
        avatar: avatar,
        name: "Nida Regita F",
        title: "4+ Cara Mudah Cek IP Hosting Website",
        description:
            "Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting ...",
        category: "Hosting",
        date: "28 Dec 2021",
        readtime: "5 min read",
        artikelimg: artikelimage,
        like: 111,
        comments: 4,
    },
    {
        id: 3,
        avatar: avatar,
        name: "Nida Regita F",
        title: "4+ Cara Mudah Cek IP Hosting Website",
        description:
            "Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting ...",
        category: "Hosting",
        date: "28 Dec 2021",
        readtime: "5 min read",
        artikelimg: artikelimage,
        like: 111,
        comments: 4,
    },
];

export default dataArtikel;
