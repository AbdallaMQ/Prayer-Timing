let cityNames = [
    // مدن مصر
    {
        arabicName: 'القاهرة',
        englishName: 'Cairo',
        code: 'EG'
    },
    {
        arabicName: 'الإسكندرية',
        englishName: 'Alexandria',
        code: 'EG'
    },
    {
        arabicName: 'الجيزة',
        englishName: 'Giza',
        code: 'EG'
    },
    {
        arabicName: 'بورسعيد',
        englishName: 'Port Said',
        code: 'EG'
    },
    {
        arabicName: 'السويس',
        englishName: 'Suez',
        code: 'EG'
    },
    {
        arabicName: 'الأقصر',
        englishName: 'Luxor',
        code: 'EG'
    },
    {
        arabicName: 'أسوان',
        englishName: 'Aswan',
        code: 'EG'
    },
    {
        arabicName: 'المنصورة',
        englishName: 'Mansoura',
        code: 'EG'
    },
    {
        arabicName: 'طنطا',
        englishName: 'Tanta',
        code: 'EG'
    },
    {
        arabicName: 'دمياط',
        englishName: 'Damietta',
        code: 'EG'
    },
    {
        arabicName: 'الزقازيق',
        englishName: 'Zagazig',
        code: 'EG'
    },
    {
        arabicName: 'الفيوم',
        englishName: 'Faiyum',
        code: 'EG'
    },
    {
        arabicName: 'بني سويف',
        englishName: 'Beni Suef',
        code: 'EG'
    },
    {
        arabicName: 'قنا',
        englishName: 'Qena',
        code: 'EG'
    },
    {
        arabicName: 'سوهاج',
        englishName: 'Sohag',
        code: 'EG'
    },
    {
        arabicName: 'مرسى مطروح',
        englishName: 'Marsa Matruh',
        code: 'EG'
    },
    {
        arabicName: 'شرم الشيخ',
        englishName: 'Sharm El Sheikh',
        code: 'EG'
    },
    {
        arabicName: 'الغردقة',
        englishName: 'Hurghada',
        code: 'EG'
    },
    {
        arabicName: 'المنيا',
        englishName: 'Minya',
        code: 'EG'
    },
    {
        arabicName: 'العريش',
        englishName: 'Arish',
        code: 'EG'
    },
    {
        arabicName: 'الإسماعيلية',
        englishName: 'Ismailia',
        code: 'EG'
    },
    {
        arabicName: 'دمنهور',
        englishName: 'Damanhur',
        code: 'EG'
    },
    {
        arabicName: 'كفر الشيخ',
        englishName: 'Kafr El Sheikh',
        code: 'EG'
    },
    {
        arabicName: 'أسيوط',
        englishName: 'Asyut',
        code: 'EG'
    },
    {
        arabicName: 'المحلة الكبرى',
        englishName: 'El Mahalla El Kubra',
        code: 'EG'
    },
    {
        arabicName: 'الطور',
        englishName: 'El Tor',
        code: 'EG'
    },
    {
        arabicName: 'رأس سدر',
        englishName: 'Ras Sedr',
        code: 'EG'
    },
    {
        arabicName: 'دهب',
        englishName: 'Dahab',
        code: 'EG'
    },
    {
        arabicName: 'نويبع',
        englishName: 'Nuweiba',
        code: 'EG'
    },
    {
        arabicName: 'مطروح',
        englishName: 'Matrouh',
        code: 'EG'
    },
    {
        arabicName: 'بدر',
        englishName: 'Badr',
        code: 'EG'
    },
    {
        arabicName: 'مدينة السادات',
        englishName: 'Sadat City',
        code: 'EG'
    },
    {
        arabicName: 'الشيخ زايد',
        englishName: 'Sheikh Zayed City',
        code: 'EG'
    },
    {
        arabicName: 'العاشر من رمضان',
        englishName: '10th of Ramadan',
        code: 'EG'
    },

    // مدن السعودية
    {
        arabicName: 'الرياض',
        englishName: 'Riyadh',
        code: 'SA'
    },
    {
        arabicName: 'جدة',
        englishName: 'Jeddah',
        code: 'SA'
    },
    {
        arabicName: 'مكة المكرمة',
        englishName: 'Mecca',
        code: 'SA'
    },
    {
        arabicName: 'المدينة المنورة',
        englishName: 'Medina',
        code: 'SA'
    },
    {
        arabicName: 'الدمام',
        englishName: 'Dammam',
        code: 'SA'
    },
    {
        arabicName: 'الخبر',
        englishName: 'Khobar',
        code: 'SA'
    },
    {
        arabicName: 'الطائف',
        englishName: 'Taif',
        code: 'SA'
    },
    {
        arabicName: 'بريدة',
        englishName: 'Buraidah',
        code: 'SA'
    },
    {
        arabicName: 'الهفوف',
        englishName: 'Hofuf',
        code: 'SA'
    },
    {
        arabicName: 'حائل',
        englishName: 'Hail',
        code: 'SA'
    },
    {
        arabicName: 'نجران',
        englishName: 'Najran',
        code: 'SA'
    },
    {
        arabicName: 'القصيم',
        englishName: 'Al Qassim',
        code: 'SA'
    },
    {
        arabicName: 'جيزان',
        englishName: 'Jazan',
        code: 'SA'
    },
    {
        arabicName: 'ينبع',
        englishName: 'Yanbu',
        code: 'SA'
    },
    {
        arabicName: 'تبوك',
        englishName: 'Tabuk',
        code: 'SA'
    },
    {
        arabicName: 'الجبيل',
        englishName: 'Jubail',
        code: 'SA'
    },
    {
        arabicName: 'أبها',
        englishName: 'Abha',
        code: 'SA'
    },
    {
        arabicName: 'خميس مشيط',
        englishName: 'Khamis Mushait',
        code: 'SA'
    },
    {
        arabicName: 'عرعر',
        englishName: 'Arar',
        code: 'SA'
    },
    {
        arabicName: 'الباحة',
        englishName: 'Al Baha',
        code: 'SA'
    },
    {
        arabicName: 'سكاكا',
        englishName: 'Sakaka',
        code: 'SA'
    },
    {
        arabicName: 'رفحاء',
        englishName: 'Rafha',
        code: 'SA'
    },
    {
        arabicName: 'القريات',
        englishName: 'Al Qurayyat',
        code: 'SA'
    },
    {
        arabicName: 'المذنب',
        englishName: 'Al Muthnab',
        code: 'SA'
    },
    {
        arabicName: 'شرورة',
        englishName: 'Sharurah',
        code: 'SA'
    },
    {
        arabicName: 'الخرج',
        englishName: 'Al Kharj',
        code: 'SA'
    }
];
