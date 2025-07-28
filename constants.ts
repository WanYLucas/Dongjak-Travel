
import type { Language, QuizQuestion, ItineraryDay } from './types';

export const LANGUAGES: Record<string, Language & {
  title: string;
  subtitle: string;
  quizTitle: string;
  quizSubtitle: string;
  submitButton: string;
  loadingText: string;
  errorText: string;
  itineraryTitle: string;
  dayButton: (day: number) => string;
  restartButton: string;
  recommendationsTitle: string;
  recommendationsError: string;
  mapTitle: (userName: string) => string;
  itineraryListTitle: (day: number) => string;
  tipsTitle: string;
  websiteLink: string;
  googleMapsLink: string;
  naverMapsLink: string;
}> = {
  ko: { 
    code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷',
    title: '동작의 재발견', subtitle: 'AI와 함께 숨겨진 매력을 찾아보세요',
    quizTitle: '나만의 여행 스타일 찾기', quizSubtitle: '나만의 추천 장소를 받기 위해 몇 가지 질문에 답해주세요.',
    submitButton: '결과 보기', loadingText: '당신만을 위한 추천 장소를 찾고 있습니다...',
    errorText: '죄송합니다, 추천을 생성하는 데 문제가 발생했습니다. 기본 일정은 계속 보실 수 있습니다.',
    itineraryTitle: '나의 동작구 3일 여행',
    dayButton: (day) => `${day}일차`, restartButton: '처음부터 다시 시작',
    recommendationsTitle: '💖 당신이 좋아할 만한 장소',
    recommendationsError: '추천 장소를 불러오는 데 실패했지만, 기본 여행 계획은 여기 있습니다!',
    mapTitle: (userName) => `${userName}님, 당신의 여행 지도예요!`,
    itineraryListTitle: (day) => `${day}일차 계획`,
    tipsTitle: '전문가 팁', websiteLink: '웹사이트 방문', googleMapsLink: '구글 지도로 열기', naverMapsLink: '네이버 지도로 열기'
  },
  en: { 
    code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧',
    title: 'Rediscover Dongjak', subtitle: 'Find hidden gems with your AI travel guide',
    quizTitle: 'Find Your Travel Personality', quizSubtitle: 'Answer a few questions to get personalized recommendations.',
    submitButton: 'See Results', loadingText: 'Finding places you might love...',
    errorText: 'Sorry, there was an issue generating recommendations. You can still view the main itinerary.',
    itineraryTitle: 'Your 3-Day Dongjak Itinerary',
    dayButton: (day) => `Day ${day}`, restartButton: 'Start Over',
    recommendationsTitle: '💖 Places You Might Love',
    recommendationsError: 'We couldn\'t load your recommendations, but here is our fantastic main itinerary!',
    mapTitle: (userName) => `Here's your map, ${userName}!`,
    itineraryListTitle: (day) => `Day ${day} Plan`,
    tipsTitle: 'Expert Tip', websiteLink: 'Visit Website', googleMapsLink: 'Open in Google Maps', naverMapsLink: 'Open in Naver Map'
  },
  es: { 
    code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸',
    title: 'Redescubre Dongjak', subtitle: 'Encuentra joyas ocultas con tu guía de viajes IA',
    quizTitle: 'Descubre tu Personalidad Viajera', quizSubtitle: 'Responde algunas preguntas para obtener recomendaciones personalizadas.',
    submitButton: 'Ver Resultados', loadingText: 'Buscando lugares que te encantarán...',
    errorText: 'Lo sentimos, hubo un problema al generar recomendaciones. Aún puedes ver el itinerario principal.',
    itineraryTitle: 'Tu Itinerario de 3 Días en Dongjak',
    dayButton: (day) => `Día ${day}`, restartButton: 'Empezar de Nuevo',
    recommendationsTitle: '💖 Lugares que Podrían Encantarte',
    recommendationsError: 'No pudimos cargar tus recomendaciones, ¡pero aquí está nuestro fantástico itinerario principal!',
    mapTitle: (userName) => `¡Aquí está tu mapa, ${userName}!`,
    itineraryListTitle: (day) => `Plan del Día ${day}`,
    tipsTitle: 'Consejo de Experto', websiteLink: 'Visitar Sitio Web', googleMapsLink: 'Abrir en Google Maps', naverMapsLink: 'Abrir en Naver Map'
  },
  zh: { 
    code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳',
    title: '重新发现铜雀', subtitle: '用你的AI旅游指南发现隐藏的宝藏',
    quizTitle: '发现您的旅行个性', quizSubtitle: '回答几个问题以获取个性化推荐。',
    submitButton: '查看结果', loadingText: '正在寻找您可能喜欢的地方...',
    errorText: '抱歉，生成推荐时出现问题。您仍然可以查看主要行程。',
    itineraryTitle: '您的铜雀区3日行程',
    dayButton: (day) => `第 ${day} 天`, restartButton: '重新开始',
    recommendationsTitle: '💖 您可能喜欢的地方',
    recommendationsError: '我们无法加载您的推荐，但这里是我们精彩的主要行程！',
    mapTitle: (userName) => `${userName}，这是您的地图！`,
    itineraryListTitle: (day) => `第 ${day} 天计划`,
    tipsTitle: '专家提示', websiteLink: '访问网站', googleMapsLink: '在谷歌地图中打开', naverMapsLink: '在Naver地图中打开'
  },
  de: { 
    code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪',
    title: 'Entdecke Dongjak neu', subtitle: 'Finde versteckte Juwelen mit deinem KI-Reiseführer',
    quizTitle: 'Finden Sie Ihre Reise-Persönlichkeit', quizSubtitle: 'Beantworten Sie ein paar Fragen für persönliche Empfehlungen.',
    submitButton: 'Ergebnisse ansehen', loadingText: 'Suche nach Orten, die Ihnen gefallen könnten...',
    errorText: 'Entschuldigung, beim Erstellen der Empfehlungen ist ein Fehler aufgetreten. Sie können die Hauptreiseroute trotzdem ansehen.',
    itineraryTitle: 'Ihre 3-Tage-Reiseroute für Dongjak',
    dayButton: (day) => `Tag ${day}`, restartButton: 'Neu starten',
    recommendationsTitle: '💖 Orte, die Ihnen gefallen könnten',
    recommendationsError: 'Wir konnten Ihre Empfehlungen nicht laden, aber hier ist unsere fantastische Hauptreiseroute!',
    mapTitle: (userName) => `Hier ist deine Karte, ${userName}!`,
    itineraryListTitle: (day) => `Tag ${day} Plan`,
    tipsTitle: 'Experten-Tipp', websiteLink: 'Webseite besuchen', googleMapsLink: 'In Google Maps öffnen', naverMapsLink: 'In Naver Map öffnen'
  },
  ja: { 
    code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵',
    title: '銅雀を再発見', subtitle: 'AIトラベルガイドで隠れた名所を見つけよう',
    quizTitle: 'あなたの旅行スタイル診断', quizSubtitle: 'いくつかの質問に答えて、パーソナライズされたおすすめを受け取りましょう。',
    submitButton: '結果を見る', loadingText: 'あなたが好きそうな場所を探しています...',
    errorText: '申し訳ありません、おすすめの生成中に問題が発生しました。主要な旅程は引き続きご覧いただけます。',
    itineraryTitle: 'あなたの銅雀3日間モデルコース',
    dayButton: (day) => `${day}日目`, restartButton: '最初からやり直す',
    recommendationsTitle: '💖 あなたへのおすすめ',
    recommendationsError: 'おすすめを読み込めませんでしたが、こちらが私たちの素晴らしい基本プランです！',
    mapTitle: (userName) => `${userName}さん、こちらがあなたの地図です！`,
    itineraryListTitle: (day) => `${day}日目の計画`,
    tipsTitle: '専門家のヒント', websiteLink: 'ウェブサイトを見る', googleMapsLink: 'Googleマップで開く', naverMapsLink: 'Naverマップで開く'
  },
  th: { 
    code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭',
    title: 'ค้นพบทงจักอีกครั้ง', subtitle: 'ค้นหาอัญมณีที่ซ่อนอยู่ด้วยคู่มือเดินทาง AI ของคุณ',
    quizTitle: 'ค้นหาบุคลิกการเดินทางของคุณ', quizSubtitle: 'ตอบคำถามสองสามข้อเพื่อรับคำแนะนำส่วนตัว',
    submitButton: 'ดูผลลัพธ์', loadingText: 'กำลังค้นหาสถานที่ที่คุณอาจชอบ...',
    errorText: 'ขออภัย เกิดปัญหาในการสร้างคำแนะนำ คุณยังสามารถดูแผนการเดินทางหลักได้',
    itineraryTitle: 'แผนการเดินทางทงจัก 3 วันของคุณ',
    dayButton: (day) => `วันที่ ${day}`, restartButton: 'เริ่มต้นใหม่',
    recommendationsTitle: '💖 สถานที่ที่คุณอาจรัก',
    recommendationsError: 'เราไม่สามารถโหลดคำแนะนำของคุณได้ แต่ที่นี่คือแผนการเดินทางหลักที่ยอดเยี่ยมของเรา!',
    mapTitle: (userName) => `นี่คือแผนที่ของคุณ, ${userName}!`,
    itineraryListTitle: (day) => `แผนวันที่ ${day}`,
    tipsTitle: 'เคล็ดลับจากผู้เชี่ยวชาญ', websiteLink: 'เยี่ยมชมเว็บไซต์', googleMapsLink: 'เปิดใน Google Maps', naverMapsLink: 'เปิดใน Naver Map'
  },
  ru: {
    code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺',
    title: 'Откройте для себя Тонджак', subtitle: 'Найдите скрытые жемчужины с вашим AI-гидом',
    quizTitle: 'Определите свой стиль путешествий', quizSubtitle: 'Ответьте на несколько вопросов, чтобы получить персональные рекомендации.',
    submitButton: 'Показать результаты', loadingText: 'Ищем места, которые могут вам понравиться...',
    errorText: 'К сожалению, при создании рекомендаций произошла ошибка. Вы все еще можете просмотреть основной маршрут.',
    itineraryTitle: 'Ваш 3-дневный маршрут по Тонджак-гу',
    dayButton: (day) => `День ${day}`, restartButton: 'Начать сначала',
    recommendationsTitle: '💖 Места, которые могут вам понравиться',
    recommendationsError: 'Мы не смогли загрузить ваши рекомендации, но вот наш основной маршрут!',
    mapTitle: (userName) => `Вот ваша карта, ${userName}!`,
    itineraryListTitle: (day) => `План на день ${day}`,
    tipsTitle: 'Совет эксперта', websiteLink: 'Посетить веб-сайт', googleMapsLink: 'Открыть в Google Картах', naverMapsLink: 'Открыть в Naver Map'
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'food',
    questionText: {
      ko: '어떤 종류의 한국 음식이 가장 궁금하세요?',
      en: 'What kind of Korean food are you most curious about?',
      es: '¿Qué tipo de comida coreana te da más curiosidad?',
      zh: '你对哪种韩国食物最好奇？',
      de: 'Auf welche Art von koreanischem Essen sind Sie am neugierigsten?',
      ja: 'どんな種類の韓国料理に一番興味がありますか？',
      th: 'คุณอยากรู้เกี่ยวกับอาหารเกาหลีประเภทไหนมากที่สุด?',
      ru: 'Какая корейская еда вам наиболее интересна?',
    },
    options: [
      { id: 'seafood', text: { ko: '싱싱한 해산물', en: 'Fresh Seafood', es: 'Mariscos Frescos', zh: '新鲜海鲜', de: 'Frische Meeresfrüchte', ja: '新鮮なシーフード', th: 'อาหารทะเลสด', ru: 'Свежие морепродукты' } },
      { id: 'meat', text: { ko: '육즙 가득 고기/BBQ', en: 'Juicy Meat/BBQ', es: 'Carne Jugosa/BBQ', zh: '多汁的肉/烧烤', de: 'Saftiges Fleisch/BBQ', ja: 'ジューシーな肉/BBQ', th: 'เนื้อฉ่ำ/บาร์บีคิว', ru: 'Сочное мясо/BBQ' } },
      { id: 'soups', text: { ko: '뜨끈한 국물 요리', en: 'Hearty Soups', es: 'Sopas Contundentes', zh: '暖心汤品', de: 'Herzhafte Suppen', ja: '心温まるスープ', th: 'ซุปเข้มข้น', ru: 'Сытные супы' } },
      { id: 'noodles', text: { ko: '다양한 면 요리', en: 'Noodle Dishes', es: 'Platos de Fideos', zh: '面食', de: 'Nudelgerichte', ja: '麺料理', th: 'เมนูเส้น', ru: 'Блюда из лапши' } },
      { id: 'markets', text: { ko: '활기찬 시장 음식', en: 'Vibrant Market Food', es: 'Comida de Mercado Vibrante', zh: '热闹的市场美食', de: 'Lebhaftes Marktessen', ja: '活気ある市場の食べ物', th: 'อาหารตลาดที่มีชีวิตชีวา', ru: 'Еда на оживленном рынке' } },
      { id: 'vegan', text: { ko: '채식/비건', en: 'Vegan/Vegetarian', es: 'Vegano/Vegetariano', zh: '纯素/素食', de: 'Vegan/Vegetarisch', ja: 'ビーガン/ベジタリアン', th: 'วีแกน/มังสวิรัติ', ru: 'Веганская/вегетарианская еда' } },
      { id: 'cafes', text: { ko: '감성 카페 & 디저트', en: 'Aesthetic Cafés & Desserts', es: 'Cafés y Postres Estéticos', zh: '有格调的咖啡馆和甜点', de: 'Ästhetische Cafés & Desserts', ja: 'おしゃれなカフェ＆デザート', th: 'คาเฟ่และของหวานสวยๆ', ru: 'Атмосферные кафе и десерты' } },
    ],
  },
  {
    id: 'place',
    questionText: {
      ko: '어떤 종류의 장소를 가장 즐겨 방문하세요?',
      en: 'What kind of place do you most enjoy visiting?',
      es: '¿Qué tipo de lugar disfrutas más visitar?',
      zh: '你最喜欢参观什么样的地方？',
      de: 'Welche Art von Ort besuchen Sie am liebsten?',
      ja: 'どんな場所を訪れるのが一番好きですか？',
      th: 'คุณชอบไปเที่ยวที่ไหนมากที่สุด?',
      ru: 'Какие места вам нравится посещать больше всего?',
    },
    options: [
      { id: 'photo-spots', text: { ko: '인생샷 포토 스팟', en: 'Insta-worthy Photo Spots', es: 'Lugares para Fotos de Instagram', zh: '网红拍照点', de: 'Instagram-würdige Fotospots', ja: 'インスタ映えする写真スポット', th: 'จุดถ่ายรูปสวยๆ ลงอินสตาแกรม', ru: 'Места для фото в Instagram' } },
      { id: 'museums', text: { ko: '박물관 & 미술관', en: 'Museums & Galleries', es: 'Museos y Galerías', zh: '博物馆和美术馆', de: 'Museen & Galerien', ja: '美術館・博物館', th: 'พิพิธภัณฑ์และหอศิลป์', ru: 'Музеи и галереи' } },
      { id: 'nightlife', text: { ko: '흥겨운 나이트라이프', en: 'Vibrant Nightlife', es: 'Vida Nocturna Vibrante', zh: '充满活力的夜生活', de: 'Lebendiges Nachtleben', ja: '活気あるナイトライフ', th: 'สถานบันเทิงยามค่ำคืนที่มีชีวิตชีวา', ru: 'Яркая ночная жизнь' } },
      { id: 'nature', text: { ko: '고요한 자연', en: 'Peaceful Nature', es: 'Naturaleza Tranquila', zh: '宁静的自然', de: 'Friedliche Natur', ja: '静かな自然', th: 'ธรรมชาติอันเงียบสงบ', ru: 'Спокойная природа' } },
      { id: 'architecture', text: { ko: '아름다운 건축물', en: 'Beautiful Architecture', es: 'Arquitectura Hermosa', zh: '美丽的建筑', de: 'Schöne Architektur', ja: '美しい建築', th: 'สถาปัตยกรรมที่สวยงาม', ru: 'Красивая архитектура' } },
      { id: 'hidden-gems', text: { ko: '나만 아는 숨겨진 명소', en: 'Hidden Gems', es: 'Joyas Ocultas', zh: '隐藏的宝石', de: 'Versteckte Juwelen', ja: '隠れた名所', th: 'สถานที่ลับ', ru: 'Скрытые жемчужины' } },
    ],
  },
    {
    id: 'how',
    questionText: {
      ko: '새로운 도시를 어떻게 탐험하는 것을 선호하세요?',
      en: 'How do you prefer to explore new cities?',
      es: '¿Cómo prefieres explorar nuevas ciudades?',
      zh: '你喜欢如何探索新城市？',
      de: 'Wie erkunden Sie am liebsten neue Städte?',
      ja: '新しい都市をどのように散策するのが好きですか？',
      th: 'คุณชอบสำรวจเมืองใหม่ๆ อย่างไร?',
      ru: 'Как вы предпочитаете исследовать новые города?',
    },
    options: [
      { id: 'walking', text: { ko: '골목골목 걸어서', en: 'By walking through alleys', es: 'Caminando por los callejones', zh: '走街串巷', de: 'Zu Fuß durch Gassen', ja: '路地を歩いて', th: 'เดินไปตามตรอกซอกซอย', ru: 'Прогуливаясь по переулкам' } },
      { id: 'food', text: { ko: '맛집을 찾아서', en: 'Through finding great food', es: 'A través de la buena comida', zh: '通过美食', de: 'Durch gutes Essen', ja: '食べ物を通して', th: 'ผ่านอาหารอร่อย', ru: 'Находя отличную еду' } },
      { id: 'coffee-hopping', text: { ko: '예쁜 카페 투어', en: 'By coffee hopping', es: 'De café en café', zh: '咖啡馆巡礼', de: 'Kaffee-Hopping', ja: 'カフェ巡り', th: 'ทัวร์คาเฟ่', ru: 'Посещая разные кофейни' } },
      { id: 'talking-to-locals', text: { ko: '현지인과 대화하며', en: 'By talking to locals', es: 'Hablando con los locales', zh: '与当地人交谈', de: 'Indem man mit Einheimischen spricht', ja: '地元の人と話しながら', th: 'พูดคุยกับคนท้องถิ่น', ru: 'Общаясь с местными жителями' } },
      { id: 'history', text: { ko: '역사의 흔적을 따라', en: 'By following historical traces', es: 'Siguiendo rastros históricos', zh: '追随历史的足迹', de: 'Den Spuren der Geschichte folgend', ja: '歴史の跡をたどって', th: 'ตามรอยประวัติศาสตร์', ru: 'Следуя по историческим местам' } },
    ],
  },
    {
    id: 'with',
    questionText: {
      ko: '누구와 함께 여행하시나요?',
      en: 'Who are you traveling with?',
      es: '¿Con quién viajas?',
      zh: '你和谁一起旅行？',
      de: 'Mit wem reisen Sie?',
      ja: '誰と旅行していますか？',
      th: 'คุณเดินทางกับใคร?',
      ru: 'С кем вы путешествуете?',
    },
    options: [
      { id: 'solo', text: { ko: '혼자', en: 'Solo', es: 'Solo/a', zh: '独自一人', de: 'Alleine', ja: '一人で', th: 'คนเดียว', ru: 'В одиночку' } },
      { id: 'partner', text: { ko: '연인', en: 'Partner', es: 'Pareja', zh: '伴侣', de: 'Partner', ja: 'パートナーと', th: 'กับแฟน', ru: 'С партнером' } },
      { id: 'family', text: { ko: '가족', en: 'Family', es: 'Familia', zh: '家人', de: 'Familie', ja: '家族と', th: 'กับครอบครัว', ru: 'С семьей' } },
      { id: 'friends', text: { ko: '친구', en: 'Friends', es: 'Amigos', zh: '朋友', de: 'Freunde', ja: '友達と', th: 'กับเพื่อน', ru: 'С друзьями' } },
    ],
  },
  {
    id: 'vibe',
    questionText: {
      ko: '완벽한 오후를 위한 이상적인 분위기는 무엇인가요?',
      en: 'What\'s the ideal vibe for your perfect afternoon?',
      es: '¿Cuál es el ambiente ideal para tu tarde perfecta?',
      zh: '你完美下午的理想氛围是什么？',
      de: 'Was ist die ideale Stimmung für Ihren perfekten Nachmittag?',
      ja: '完璧な午後を過ごすための理想的な雰囲気は？',
      th: 'บรรยากาศในอุดมคติสำหรับช่วงบ่ายที่สมบูรณ์แบบของคุณคืออะไร?',
      ru: 'Какая атмосфера идеальна для вашего прекрасного дня?',
    },
    options: [
      { id: 'cozy', text: { ko: '아늑하고 평온하게', en: 'Cozy and calm', es: 'Acogedor y tranquilo', zh: '舒适安宁', de: 'Gemütlich und ruhig', ja: '居心地が良く穏やか', th: 'อบอุ่นและสงบ', ru: 'Уютная и спокойная' } },
      { id: 'fun', text: { ko: '재미있고 활기차게', en: 'Fun and vibrant', es: 'Divertido y vibrante', zh: '有趣和充满活力', de: 'Unterhaltsam und lebendig', ja: '楽しくて活気がある', th: 'สนุกสนานและมีชีวิตชีวา', ru: 'Веселая и оживленная' } },
      { id: 'artistic', text: { ko: '예술적이고 창의롭게', en: 'Artistic and creative', es: 'Artístico y creativo', zh: '艺术和创意', de: 'Künstlerisch und kreativ', ja: '芸術的で創造的', th: 'มีศิลปะและสร้างสรรค์', ru: 'Творческая и креативная' } },
      { id: 'active', text: { ko: '활동적이고 야외에서', en: 'Active and outdoors', es: 'Activo y al aire libre', zh: '活跃和户外', de: 'Aktiv und im Freien', ja: 'アクティブでアウトドア', th: 'กระฉับกระเฉงและกลางแจ้ง', ru: 'Активная и на свежем воздухе' } },
      { id: 'chic', text: { ko: '세련되고 스타일리시하게', en: 'Chic and stylish', es: 'Chic y con estilo', zh: '别致和时尚', de: 'Schick und stilvoll', ja: 'シックでスタイリッシュ', th: 'เก๋ไก๋และมีสไตล์', ru: 'Шикарная и стильная' } },
    ],
  },
];

export const FIXED_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    theme: { ko: '역사와 기억의 하루', en: 'A Day of History & Memory', es: 'Un Día de Historia y Memoria', zh: '历史与记忆的一天', de: 'Ein Tag der Geschichte und Erinnerung', ja: '歴史と記憶の一日', th: 'วันแห่งประวัติศาสตร์และความทรงจำ', ru: 'День истории и памяти' },
    locations: [
      { 
        name: { ko: '국립서울현충원', en: 'Seoul National Cemetery', es: 'Cementerio Nacional de Seúl', zh: '国立首尔显忠院', de: 'Nationalfriedhof Seoul', ja: '国立ソウル顕忠院', th: 'สุสานแห่งชาติโซล', ru: 'Сеульское национальное кладбище' },
        activity: { ko: '관광', en: 'Sightseeing', es: 'Turismo', zh: '观光', de: 'Besichtigung', ja: '観光', th: 'เที่ยวชม', ru: 'Осмотр достопримечательностей' },
        address: { ko: '서울 동작구 현충로 210', en: '210 Hyeonchung-ro, Dongjak-gu, Seoul', es: '210 Hyeonchung-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区显忠路210', de: '210 Hyeonchung-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区顕忠路210', th: '210 ฮยอนชุง-โร, ทงจัก-กู, โซล', ru: '210 Хёнчунг-ро, Тонджак-гу, Сеул' },
        time: { ko: '오전 (2-3시간)', en: 'Morning (2-3 hrs)', es: 'Mañana (2-3 h)', zh: '上午 (2-3小时)', de: 'Vormittag (2-3 Std.)', ja: '午前 (2-3時間)', th: 'ช่วงเช้า (2-3 ชั่วโมง)', ru: 'Утро (2-3 часа)' },
        link: 'https://www.mpva.go.kr/snmb/index.do',
        website: 'https://www.mpva.go.kr/snmb/index.do',
        icon: '🕊️',
        description: { ko: '나라를 위해 희생한 분들을 기리는 엄숙하고 아름다운 장소입니다. 평화로운 산책로를 거닐며 대한민국의 역사를 되돌아볼 수 있습니다.', en: 'A solemn and beautiful place dedicated to the men and women who served Korea. It offers peaceful walks and a glimpse into the nation\'s history.', es: 'Un lugar solemne y hermoso dedicado a los hombres y mujeres que sirvieron a Corea. Ofrece paseos tranquilos y una visión de la historia de la nación.', zh: '这是一个庄严肃穆、美丽的地方，旨在纪念为韩国服务的男女军人。这里提供宁静的散步道，让人一窥国家的历史。', de: 'Ein feierlicher und schöner Ort, der den Männern und Frauen gewidmet ist, die Korea gedient haben. Er bietet friedliche Spaziergänge und einen Einblick in die Geschichte der Nation.', ja: '韓国のために尽くした人々を追悼する、厳かで美しい場所です。静かな散歩道を歩きながら、国の歴史に触れることができます。', th: 'สถานที่อันสง่างามและสวยงามที่อุทิศให้กับชายและหญิงที่รับใช้ชาติเกาหลีใต้ ที่นี่มีทางเดินอันเงียบสงบและให้เราได้สัมผัสกับประวัติศาสตร์ของชาติ', ru: 'Торжественное и красивое место, посвященное мужчинам и женщинам, служившим Корее. Здесь можно спокойно прогуляться и познакомиться с историей страны.' },
        category: { ko: '역사', en: 'History', es: 'Historia', zh: '历史', de: 'Geschichte', ja: '歴史', th: 'ประวัติศาสตร์', ru: 'История' },
        tip: { ko: '근위병 교대식 시간에 맞춰 방문하면 기억에 남는 경험이 될 것입니다. 부지가 넓으니 편한 신발을 신으세요.', en: 'Visit during the changing of the guard ceremony for a memorable experience. It\'s a large area, so wear comfortable shoes.', es: 'Visite durante la ceremonia del cambio de guardia para una experiencia memorable. Es un área grande, así que use zapatos cómodos.', zh: '卫兵换岗仪式期间参观，将是一次难忘的经历。这里面积很大，所以请穿舒适的鞋子。', de: 'Besuchen Sie die Wachablösung für ein unvergessliches Erlebnis. Das Gelände ist groß, tragen Sie also bequeme Schuhe.', ja: '衛兵交代式に合わせて訪れると、記憶に残る体験ができます。敷地が広いので、歩きやすい靴を履いていくことをお勧めします。', th: 'เยี่ยมชมในช่วงพิธีเปลี่ยนเวรยามเพื่อประสบการณ์ที่น่าจดจำ เป็นพื้นที่ขนาดใหญ่ ดังนั้นควรสวมรองเท้าที่สบาย', ru: 'Посетите церемонию смены караула, чтобы получить незабываемые впечатления. Территория большая, поэтому наденьте удобную обувь.' },
        travelInfoToHere: { mode: { ko: '시작', en: 'Start', es: 'Inicio', zh: '开始', de: 'Start', ja: '開始', th: 'เริ่มต้น', ru: 'Начало' }, duration: { ko: '여정이 시작됩니다!', en: 'Your journey begins!', es: '¡Tu viaje comienza!', zh: '您的旅程开始了！', de: 'Deine Reise beginnt!', ja: '旅の始まりです！', th: 'การเดินทางของคุณเริ่มต้นขึ้นแล้ว!', ru: 'Ваше путешествие начинается!' } },
        imageUrl: 'https://source.unsplash.com/800x600/?korea,seoul-national-cemetery,memorial,monument',
      },
      {
        name: { ko: '노량진 수산시장 & 컵밥거리', en: 'Noryangjin Fish Market & Cupbap Alley', es: 'Mercado de Pescado de Noryangjin y Callejón Cupbap', zh: '鹭梁津水产市场 & 杯饭一条街', de: 'Noryangjin-Fischmarkt & Cupbap-Gasse', ja: '鷺梁津水産市場＆カップ飯通り', th: 'ตลาดปลาโนรยังจินและซอยคัพบับ', ru: 'Рыбный рынок Норянджин и Аллея Каппаб' },
        activity: { ko: '식사 & 구경', en: 'Lunch & Exploring', es: 'Almuerzo y Exploración', zh: '午餐与探索', de: 'Mittagessen & Erkunden', ja: 'ランチ＆散策', th: 'อาหารกลางวันและสำรวจ', ru: 'Обед и исследование' },
        address: { ko: '서울 동작구 노들로 674', en: '674 Nodeul-ro, Dongjak-gu, Seoul', es: '674 Nodeul-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区노들路674', de: '674 Nodeul-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区ノドゥル路674', th: '674 โนดึล-โร, ทงจัก-กู, โซล', ru: '674 Нодыль-ро, Тонджак-гу, Сеул' },
        time: { ko: '점심 (2시간)', en: 'Lunch (2 hrs)', es: 'Almuerzo (2 h)', zh: '午餐 (2小时)', de: 'Mittagessen (2 Std.)', ja: '昼食 (2時間)', th: 'อาหารกลางวัน (2 ชั่วโมง)', ru: 'Обед (2 часа)' },
        icon: '🐟',
        link: 'https://www.susansijang.co.kr/nsis/miw/intro',
        website: 'https://www.susansijang.co.kr/nsis/miw/intro',
        description: { ko: '싱싱한 해산물이 가득한 서울 최대의 수산시장입니다. 2층 식당에서 즉석에서 회를 맛보거나, 밖으로 나와 저렴하고 맛있는 컵밥으로 에너지를 충전하세요.', en: 'Seoul\'s largest fish market, bustling with fresh seafood. Enjoy fresh raw fish at a restaurant upstairs, or head outside for cheap and delicious cup-bap (rice in a cup).', es: 'El mercado de pescado más grande de Seúl, lleno de mariscos frescos. Disfrute de pescado crudo fresco en un restaurante en el piso de arriba, o salga a la calle para disfrutar de un cup-bap (arroz en una taza) barato y delicioso.', zh: '首尔最大的鱼市场，到处都是新鲜的海鲜。在楼上的餐厅享用新鲜的生鱼片，或者到外面品尝便宜又美味的杯饭。', de: 'Seouls größter Fischmarkt, voller frischer Meeresfrüchte. Genießen Sie frischen rohen Fisch in einem Restaurant im Obergeschoss oder probieren Sie draußen günstiges und leckeres Cup-Bap (Reis im Becher).', ja: '新鮮な魚介類で賑わうソウル最大の水産市場です。2階の食堂で新鮮な刺身を味わったり、外で安くて美味しいカップ飯を楽しんだりできます。', th: 'ตลาดปลาที่ใหญ่ที่สุดในกรุงโซล คึกคักไปด้วยอาหารทะเลสดๆ เพลิดเพลินกับปลาดิบสดๆ ที่ร้านอาหารชั้นบน หรือออกไปข้างนอกเพื่อทานคัพบับ (ข้าวในถ้วย) ที่ถูกและอร่อย', ru: 'Крупнейший рыбный рынок Сеула, изобилующий свежими морепродуктами. Насладитесь свежей сырой рыбой в ресторане наверху или выйдите на улицу, чтобы отведать дешевый и вкусный кап-паб (рис в стакане).' },
        category: { ko: '시장', en: 'Market', es: 'Mercado', zh: '市场', de: 'Markt', ja: '市場', th: 'ตลาด', ru: 'Рынок' },
        tip: { ko: '가격을 흥정하는 재미를 느껴보세요! 현금을 준비해가면 조금 더 유리할 수 있습니다.', en: 'Try your hand at bargaining for a fun experience! Bringing cash might give you a slight edge.', es: '¡Intenta regatear para una experiencia divertida! Llevar efectivo podría darte una pequeña ventaja.', zh: '尝试讨价还价，体验一番乐趣！带现金可能会让你占点优势。', de: 'Versuchen Sie sich im Handeln für ein lustiges Erlebnis! Bargeld könnte Ihnen einen kleinen Vorteil verschaffen.', ja: '値段交渉に挑戦してみましょう！現金を持っていくと少し有利になるかもしれません。', th: 'ลองต่อรองราคาเพื่อประสบการณ์ที่สนุกสนาน! การพกเงินสดอาจทำให้คุณได้เปรียบเล็กน้อย', ru: 'Попробуйте поторговаться ради развлечения! Наличие наличных может дать вам небольшое преимущество.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 15분', en: 'Approx. 15 mins', es: 'Aprox. 15 mins', zh: '约15分钟', de: 'Ca. 15 min', ja: '約15分', th: 'ประมาณ 15 นาที', ru: 'Около 15 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?noryangjin,seafood,market,octopus,fish-auction',
      },
      {
        name: { ko: '사육신역사공원', en: 'Sayuksin History Park', es: 'Parque Histórico Sayuksin', zh: '死六臣历史公园', de: 'Sayuksin-Geschichtspark', ja: '死六臣歴史公園', th: 'สวนประวัติศาสตร์ซายุกชิน', ru: 'Исторический парк Саюкщин' },
        activity: { ko: '산책 & 역사', en: 'Walk & History', es: 'Paseo e Historia', zh: '散步与历史', de: 'Spaziergang & Geschichte', ja: '散策＆歴史', th: 'เดินเล่นและประวัติศาสตร์', ru: 'Прогулка и история' },
        address: { ko: '서울 동작구 노량진로 191', en: '191 Noryangjin-ro, Dongjak-gu, Seoul', es: '191 Noryangjin-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区鹭梁津路191', de: '191 Noryangjin-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区鷺梁津路191', th: '191 โนรยังจิน-โร, ทงจัก-กู, โซล', ru: '191 Норянджин-ро, Тонджак-гу, Сеул' },
        time: { ko: '오후 (1시간)', en: 'Afternoon (1 hr)', es: 'Tarde (1 h)', zh: '下午 (1小时)', de: 'Nachmittag (1 Std.)', ja: '午後 (1時間)', th: 'ช่วงบ่าย (1 ชั่วโมง)', ru: 'День (1 час)' },
        icon: '🌳',
        description: { ko: '조선시대 단종을 위해 충절을 지킨 여섯 신하를 기리는 공원입니다. 고즈넉한 분위기 속에서 산책하며 서울의 풍경을 감상하기 좋습니다.', en: 'A park commemorating six loyal subjects of the Joseon Dynasty. It\'s a great place to appreciate the Seoul landscape while taking a quiet stroll.', es: 'Un parque que conmemora a seis súbditos leales de la Dinastía Joseon. Es un gran lugar para apreciar el paisaje de Seúl mientras se da un paseo tranquilo.', zh: '纪念朝鲜王朝六位忠臣的公园。在宁静的氛围中漫步，欣赏首尔的风景，是一个很棒的地方。', de: 'Ein Park zum Gedenken an sechs treue Untertanen der Joseon-Dynastie. Ein großartiger Ort, um die Landschaft Seouls bei einem ruhigen Spaziergang zu genießen.', ja: '朝鮮時代の6人の忠臣を記念する公園です。静かな散策をしながらソウルの風景を楽しむのに最適な場所です。', th: 'สวนสาธารณะที่ระลึกถึงข้าราชการผู้ภักดี 6 ท่านในสมัยราชวงศ์โชซอน เป็นสถานที่ที่เหมาะสำหรับการชื่นชมทิวทัศน์ของกรุงโซลขณะเดินเล่นอย่างเงียบๆ', ru: 'Парк в память о шести верных подданных династии Чосон. Это отличное место для того, чтобы насладиться пейзажем Сеула во время тихой прогулки.' },
        category: { ko: '공원', en: 'Park', es: 'Parque', zh: '公园', de: 'Park', ja: '公園', th: 'สวนสาธารณะ', ru: 'Парк' },
        tip: { ko: '해질녘에 방문하면 노을과 함께 아름다운 도시의 실루엣을 볼 수 있습니다. 근처의 도로도로 카페와 함께 묶어서 방문해보세요.', en: 'Visit at sunset to see the beautiful city silhouette against the twilight. Consider visiting along with the nearby Dorodoro Cafe.', es: 'Visite al atardecer para ver la hermosa silueta de la ciudad contra el crepúsculo. Considere visitar junto con el cercano Café Dorodoro.', zh: '日落时分参观，可以欣赏到美丽的城市剪影。可以考虑与附近的Dorodoro咖啡馆一起参观。', de: 'Besuchen Sie den Park bei Sonnenuntergang, um die wunderschöne Stadtsilhouette gegen die Dämmerung zu sehen. Erwägen Sie einen Besuch zusammen mit dem nahe gelegenen Dorodoro Cafe.', ja: '夕暮れ時に訪れると、美しい街のシルエットが見られます。近くのドロドロカフェと合わせて訪れるのもおすすめです。', th: 'เยี่ยมชมตอนพระอาทิตย์ตกเพื่อชมภาพเงาของเมืองที่สวยงามตัดกับแสงสนธยา ลองแวะไปพร้อมกับร้านโดโรโดโรคาเฟ่ที่อยู่ใกล้ๆ', ru: 'Посетите на закате, чтобы увидеть красивый силуэт города на фоне сумерек. Рассмотрите возможность посещения вместе с близлежащим кафе Dorodoro.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 10분', en: 'Approx. 10 mins', es: 'Aprox. 10 mins', zh: '约10分钟', de: 'Ca. 10 min', ja: '約10分', th: 'ประมาณ 10 นาที', ru: 'Около 10 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korea,park,history,shrine,traditional',
      },
      {
        name: { ko: '도로도로커피', en: 'Dorodoro Coffee', es: 'Café Dorodoro', zh: 'Dorodoro咖啡', de: 'Dorodoro Kaffee', ja: 'ドロドロコーヒー', th: 'โดโรโดโร คอฟฟี่', ru: 'Кофейня Dorodoro' },
        activity: { ko: '휴식', en: 'Rest', es: 'Descanso', zh: '休息', de: 'Ruhe', ja: '休憩', th: 'พักผ่อน', ru: 'Отдых' },
        address: { ko: '서울 동작구 노량진로 145 1층', en: '1st Floor, 145 Noryangjin-ro, Dongjak-gu, Seoul', es: '1er piso, 145 Noryangjin-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区鹭梁津路145 1楼', de: '1. Stock, 145 Noryangjin-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区鷺梁津路145 1階', th: 'ชั้น 1, 145 โนรยังจิน-โร, ทงจัก-กู, โซล', ru: '1-й этаж, 145 Норянджин-ро, Тонджак-гу, Сеул' },
        time: { ko: '오후 (1시간)', en: 'Afternoon (1 hr)', es: 'Tarde (1 h)', zh: '下午 (1小时)', de: 'Nachmittag (1 Std.)', ja: '午後 (1時間)', th: 'ช่วงบ่าย (1 ชั่วโมง)', ru: 'День (1 час)' },
        icon: '☕',
        link: 'https://www.instagram.com/dorodoro___/',
        website: 'https://www.instagram.com/dorodoro___/',
        description: { ko: '아늑한 분위기의 로컬 카페입니다. 잠시 쉬어가며 맛있는 커피와 디저트를 즐기기에 좋습니다.', en: 'A cozy local cafe. It\'s a great place to take a break and enjoy delicious coffee and desserts.', es: 'Una acogedora cafetería local. Es un gran lugar para tomar un descanso y disfrutar de un delicioso café y postres.', zh: '一家舒适的本地咖啡馆。这是一个休息和享用美味咖啡和甜点的好地方。', de: 'Ein gemütliches lokales Café. Es ist ein großartiger Ort, um eine Pause zu machen und köstlichen Kaffee und Desserts zu genießen.', ja: '居心地の良い地元のカフェです。休憩して美味しいコーヒーとデザートを楽しむのに最適な場所です。', th: 'คาเฟ่ท้องถิ่นบรรยากาศสบายๆ เป็นที่ที่ดีเยี่ยมสำหรับการพักผ่อนและเพลิดเพลินกับกาแฟและของหวานแสนอร่อย', ru: 'Уютное местное кафе. Отличное место, чтобы отдохнуть и насладиться вкусным кофе и десертами.' },
        category: { ko: '카페', en: 'Cafe', es: 'Café', zh: '咖啡馆', de: 'Café', ja: 'カフェ', th: 'คาเฟ่', ru: 'Кафе' },
        tip: { ko: '창가 자리에 앉으면 지나가는 사람들을 구경하는 소소한 재미를 느낄 수 있습니다.', en: 'Sitting by the window offers a simple pleasure of people-watching.', es: 'Sentarse junto a la ventana ofrece el simple placer de observar a la gente.', zh: '坐在窗边可以享受到观看来往行人的简单乐趣。', de: 'Am Fenster zu sitzen bietet das einfache Vergnügen, Leute zu beobachten.', ja: '窓際に座ると、道行く人々を眺めるささやかな楽しみがあります。', th: 'การนั่งริมหน้าต่างมอบความสุขง่ายๆ ในการเฝ้าดูผู้คน', ru: 'Сидя у окна, можно получить простое удовольствие, наблюдая за людьми.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 5분', en: 'Approx. 5 mins', es: 'Aprox. 5 mins', zh: '约5分钟', de: 'Ca. 5 min', ja: '約5分', th: 'ประมาณ 5 นาที', ru: 'Около 5 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korea,cafe,latte-art,cozy,interior',
      },
      {
        name: { ko: '용양봉저정 공원', en: 'Yongyangbongjeojeong Pavilion Park', es: 'Parque del Pabellón Yongyangbongjeojeong', zh: '龙骧凤翥亭公园', de: 'Yongyangbongjeojeong-Pavillon-Park', ja: '龍養鳳儲亭公園', th: 'สวนสาธารณะยงยังบงจอจอง', ru: 'Парк с павильоном Ёнъянбонджоджон' },
        activity: { ko: '전망 감상', en: 'View Admiring', es: 'Admirar la Vista', zh: '观景', de: 'Aussicht genießen', ja: '展望鑑賞', th: 'ชมวิว', ru: 'Любование видами' },
        address: { ko: '서울 동작구 본동 10-31', en: '10-31 Bon-dong, Dongjak-gu, Seoul', es: '10-31 Bon-dong, Dongjak-gu, Seúl', zh: '首尔铜雀区本洞10-31', de: '10-31 Bon-dong, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区本洞10-31', th: '10-31 พน-ดง, ทงจัก-กู, โซล', ru: '10-31 Бон-донг, Тонджак-гу, Сеул' },
        time: { ko: '저녁 (1시간)', en: 'Evening (1 hr)', es: 'Noche (1 h)', zh: '晚上 (1小时)', de: 'Abend (1 Std.)', ja: '夕方 (1時間)', th: 'ช่วงเย็น (1 ชั่วโมง)', ru: 'Вечер (1 час)' },
        icon: '🏞️',
        description: { ko: '한강과 서울의 야경을 파노라마로 감상할 수 있는 숨겨진 명소입니다. 특히 밤에 방문하면 화려한 도시의 불빛을 만끽할 수 있습니다.', en: 'A hidden gem offering panoramic views of the Han River and Seoul\'s nightscape. A visit at night offers a spectacular city light experience.', es: 'Una joya escondida que ofrece vistas panorámicas del río Han y el paisaje nocturno de Seúl. Una visita por la noche ofrece una espectacular experiencia de luces de la ciudad.', zh: '这是一个隐藏的宝石，可以欣赏到汉江和首尔夜景的全景。晚上参观可以体验到壮观的城市灯光。', de: 'Ein verstecktes Juwel mit Panoramablick auf den Han-Fluss und die nächtliche Skyline von Seoul. Ein Besuch bei Nacht bietet ein spektakuläres Lichterlebnis der Stadt.', ja: '漢江とソウルの夜景を一望できる隠れた名所です。特に夜に訪れると、華やかな街の灯りを満喫できます。', th: 'อัญมณีที่ซ่อนอยู่ที่มองเห็นทิวทัศน์มุมกว้างของแม่น้ำฮันและทิวทัศน์ยามค่ำคืนของกรุงโซล การมาเยือนในตอนกลางคืนจะมอบประสบการณ์แสงสีของเมืองที่น่าตื่นตาตื่นใจ', ru: 'Скрытая жемчужина, откуда открывается панорамный вид на реку Хан и ночной Сеул. Ночное посещение подарит незабываемые впечатления от огней города.' },
        category: { ko: '전망대', en: 'Observatory', es: 'Observatorio', zh: '观景台', de: 'Observatorium', ja: '展望台', th: 'จุดชมวิว', ru: 'Смотровая площадка' },
        tip: { ko: '삼각대를 챙겨가면 멋진 야경 사진을 남길 수 있습니다. 공원이므로 밤에는 조용히 감상하는 것이 좋습니다.', en: 'Bring a tripod to capture amazing night photos. As it\'s a park, it\'s best to enjoy the view quietly at night.', es: 'Lleva un trípode para capturar increíbles fotos nocturnas. Como es un parque, es mejor disfrutar de la vista en silencio por la noche.', zh: '带上三脚架可以拍出令人惊叹的夜景照片。由于是公园，晚上最好安静地欣赏风景。', de: 'Bringen Sie ein Stativ mit, um fantastische Nachtfotos zu machen. Da es sich um einen Park handelt, genießen Sie die Aussicht nachts am besten in Ruhe.', ja: '三脚を持っていくと、素晴らしい夜景写真が撮れます。公園なので、夜は静かに鑑賞するのがおすすめです。', th: 'นำขาตั้งกล้องมาด้วยเพื่อถ่ายภาพกลางคืนที่น่าตื่นตาตื่นใจ เนื่องจากเป็นสวนสาธารณะ ควรเพลิดเพลินกับทิวทัศน์อย่างเงียบๆ ในตอนกลางคืน', ru: 'Возьмите штатив, чтобы сделать потрясающие ночные фотографии. Поскольку это парк, лучше всего наслаждаться видом в тишине ночью.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 20분', en: 'Approx. 20 mins', es: 'Aprox. 20 mins', zh: '约20分钟', de: 'Ca. 20 min', ja: '約20分', th: 'ประมาณ 20 นาที', ru: 'Около 20 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?seoul,night-view,han-river,cityscape,pavilion',
      },
      {
        name: { ko: '황새골 손칼국수', en: 'Hwangsaegol Kalguksu', es: 'Hwangsaegol Kalguksu', zh: '黄鸟谷手工刀切面', de: 'Hwangsaegol Kalguksu', ja: 'ファンセゴルカルグクス', th: 'ฮวังแซกล คัลกุกซู', ru: 'Калькуксу Хвансэголь' },
        activity: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        address: { ko: '서울 동작구 상도로37길 74 B1', en: 'B1, 74 Sangdo-ro 37-gil, Dongjak-gu, Seoul', es: 'B1, 74 Sangdo-ro 37-gil, Dongjak-gu, Seúl', zh: '首尔铜雀区上道路37街74 B1', de: 'B1, 74 Sangdo-ro 37-gil, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区上道路37ギル74 B1', th: 'B1, 74 ซังโด-โร 37-กิล, ทงจัก-กู, โซล', ru: 'B1, 74 Сангдо-ро 37-гиль, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        icon: '🍜',
        description: { ko: '진한 국물의 손칼국수가 유명한 동네 맛집입니다. 하루의 피로를 따뜻한 국물로 풀어보세요.', en: 'A local favorite famous for its hand-cut noodle soup with rich broth. Unwind from your day with a warm, comforting bowl.', es: 'Un favorito local famoso por su sopa de fideos cortados a mano con un rico caldo. Relájese del día con un tazón cálido y reconfortante.', zh: '当地一家以其浓汤手工刀切面而闻名的餐厅。用一碗温暖舒适的面条来放松一天的疲劳。', de: 'Ein lokaler Favorit, berühmt für seine handgeschnittene Nudelsuppe mit reichhaltiger Brühe. Entspannen Sie sich von Ihrem Tag mit einer warmen, beruhigenden Schüssel.', ja: '濃厚なスープの手打ち麺が有名な地元で人気のお店です。温かい一杯で一日の疲れを癒してください。', th: 'ร้านโปรดของคนในท้องถิ่นที่มีชื่อเสียงด้านซุปก๋วยเตี๋ยวเส้นสดน้ำข้น พักผ่อนจากวันของคุณด้วยชามอุ่นๆ ที่ปลอบโยน', ru: 'Местное заведение, известное своим супом с лапшой ручной резки и наваристым бульоном. Расслабьтесь после долгого дня с тарелкой теплого, успокаивающего супа.' },
        category: { ko: '한식', en: 'Korean Food', es: 'Comida Coreana', zh: '韩国菜', de: 'Koreanisches Essen', ja: '韓国料理', th: 'อาหารเกาหลี', ru: 'Корейская кухня' },
        tip: { ko: '만두와 함께 먹으면 더욱 든든하고 맛있습니다. 식사 시간에는 사람이 많을 수 있으니 조금 일찍 가는 것을 추천합니다.', en: 'It\'s even more filling and delicious with dumplings. It can be crowded during meal times, so arriving a bit early is recommended.', es: 'Es aún más abundante y delicioso con dumplings. Puede estar lleno durante las horas de comida, por lo que se recomienda llegar un poco temprano.', zh: '配上饺子吃会更饱、更美味。饭点人可能会很多，建议早点去。', de: 'Mit Knödeln ist es noch sättigender und leckerer. Zu den Essenszeiten kann es voll werden, daher wird empfohlen, etwas früher zu kommen.', ja: '餃子と一緒に食べると、さらに満足感があり美味しいです。食事時は混雑することがあるので、少し早めに行くことをお勧めします。', th: 'ทานคู่กับเกี๊ยวจะอิ่มและอร่อยยิ่งขึ้น ช่วงเวลาอาหารคนอาจจะเยอะ แนะนำให้ไปเร็วหน่อย', ru: 'С пельменями еще сытнее и вкуснее. В обеденное время может быть многолюдно, поэтому рекомендуется приходить немного раньше.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 15분', en: 'Approx. 15 mins', es: 'Aprox. 15 mins', zh: '约15分钟', de: 'Ca. 15 min', ja: '約15分', th: 'ประมาณ 15 นาที', ru: 'Около 15 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korean-noodles,kalguksu,soup,food',
      },
    ]
  },
  {
    day: 2,
    theme: { ko: '로컬 문화와 밤의 낭만', en: 'Local Culture & Night Romance', es: 'Cultura Local y Romance Nocturno', zh: '当地文化与夜晚浪漫', de: 'Lokale Kultur & nächtliche Romantik', ja: 'ローカル文化と夜のロマン', th: 'วัฒนธรรมท้องถิ่นและความโรแมนติกยามค่ำคืน', ru: 'Местная культура и ночная романтика' },
    locations: [
      {
        name: { ko: '국사봉 둘레길 (상도공원)', en: 'Guksabong Trail (Sangdo Park)', es: 'Sendero Guksabong (Parque Sangdo)', zh: '国师峰步道（上道公园）', de: 'Guksabong-Weg (Sangdo-Park)', ja: '国師峰トレイル（上道公園）', th: 'เส้นทางกุกซาบง (สวนซังโด)', ru: 'Тропа Гуксабон (парк Сангдо)' },
        activity: { ko: '산책', en: 'Hiking', es: 'Senderismo', zh: '远足', de: 'Wandern', ja: 'ハイキング', th: 'เดินป่า', ru: 'Пеший туризм' },
        address: { ko: '서울 동작구 상도동 2-10', en: '2-10 Sangdo-dong, Dongjak-gu, Seoul', es: '2-10 Sangdo-dong, Dongjak-gu, Seúl', zh: '首尔铜雀区上道洞2-10', de: '2-10 Sangdo-dong, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区上道洞2-10', th: '2-10 ซังโด-ดง, ทงจัก-กู, โซล', ru: '2-10 Сангдо-донг, Тонджак-гу, Сеул' },
        time: { ko: '오전 (1.5시간)', en: 'Morning (1.5 hrs)', es: 'Mañana (1.5 h)', zh: '上午 (1.5小时)', de: 'Vormittag (1.5 Std.)', ja: '午前 (1.5時間)', th: 'ช่วงเช้า (1.5 ชั่วโมง)', ru: 'Утро (1,5 часа)' },
        icon: '⛰️',
        description: { ko: '도심 속에서 자연을 느낄 수 있는 가벼운 등산 코스입니다. 상쾌한 아침 공기를 마시며 하루를 시작하기에 완벽한 장소입니다.', en: 'A light hiking course where you can feel nature in the city center. Perfect for starting the day with fresh morning air.', es: 'Un curso de senderismo ligero donde puedes sentir la naturaleza en el centro de la ciudad. Perfecto para comenzar el día con aire fresco de la mañana.', zh: '在市中心感受自然的轻松徒步路线。在清新的早晨空气中开始新的一天，是完美的选择。', de: 'Ein leichter Wanderkurs, bei dem Sie die Natur im Stadtzentrum spüren können. Perfekt, um den Tag mit frischer Morgenluft zu beginnen.', ja: '都心で自然を感じられる軽いハイキングコースです。爽やかな朝の空気で一日を始めるのに最適な場所です。', th: 'เส้นทางเดินป่าเบาๆ ที่คุณสามารถสัมผัสธรรมชาติใจกลางเมืองได้ เหมาะสำหรับการเริ่มต้นวันใหม่ด้วยอากาศบริสุทธิ์ยามเช้า', ru: 'Легкий пешеходный маршрут, где можно почувствовать природу в центре города. Идеально для начала дня со свежим утренним воздухом.' },
        category: { ko: '자연', en: 'Nature', es: 'Naturaleza', zh: '自然', de: 'Natur', ja: '自然', th: 'ธรรมชาติ', ru: 'Природа' },
        tip: { ko: '운동화는 필수! 정상에 오르면 동작구의 전경을 한눈에 볼 수 있습니다.', en: 'Sneakers are a must! At the top, you can see a panoramic view of Dongjak-gu.', es: '¡Las zapatillas son imprescindibles! En la cima, se puede ver una vista panorámica de Dongjak-gu.', zh: '运动鞋是必须的！在山顶，你可以看到铜雀区的全景。', de: 'Turnschuhe sind ein Muss! Oben haben Sie einen Panoramablick auf Dongjak-gu.', ja: 'スニーカーは必須です！頂上からは銅雀区の全景が見渡せます。', th: 'ต้องใส่รองเท้าผ้าใบ! บนยอดเขาสามารถมองเห็นวิวทิวทัศน์ของทงจัก-กูได้', ru: 'Кроссовки обязательны! На вершине открывается панорамный вид на район Тонджак-гу.' },
        travelInfoToHere: { mode: { ko: '시작', en: 'Start', es: 'Inicio', zh: '开始', de: 'Start', ja: '開始', th: 'เริ่มต้น', ru: 'Начало' }, duration: { ko: '여정이 시작됩니다!', en: 'Your journey begins!', es: '¡Tu viaje comienza!', zh: '您的旅程开始了！', de: 'Deine Reise beginnt!', ja: '旅の始まりです！', th: 'การเดินทางของคุณเริ่มต้นขึ้นแล้ว!', ru: 'Ваше путешествие начинается!' } },
        imageUrl: 'https://source.unsplash.com/800x600/?seoul,park,hiking,forest-trail,mountain',
      },
      {
        name: { ko: '할머니가마솥추어탕 (상도점)', en: 'Grandma’s Gamasot Chueotang (Sangdo Branch)', es: 'Sopa Chueotang en Caldero de la Abuela (Sucursal Sangdo)', zh: '奶奶铁锅泥鳅汤 (上道店)', de: 'Omas Gamasot Chueotang (Filiale Sangdo)', ja: 'おばあちゃんのかまどチュオタン (上道店)', th: 'ชูออทังในหม้อเหล็กของคุณย่า (สาขาซังโด)', ru: 'Чуотан от бабушки в Гамасоте (филиал Сангдо)' },
        activity: { ko: '점심', en: 'Lunch', es: 'Almuerzo', zh: '午餐', de: 'Mittagessen', ja: 'ランチ', th: 'อาหารกลางวัน', ru: 'Обед' },
        address: { ko: '서울 동작구 상도로 133', en: '133 Sangdo-ro, Dongjak-gu, Seoul', es: '133 Sangdo-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区上道路133', de: '133 Sangdo-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区上道路133', th: '133 ซังโด-โร, ทงจัก-กู, โซล', ru: '133 Сангдо-ро, Тонджак-гу, Сеул' },
        time: { ko: '점심 (1시간)', en: 'Lunch (1 hr)', es: 'Almuerzo (1 h)', zh: '午餐 (1小时)', de: 'Mittagessen (1 Std.)', ja: '昼食 (1時間)', th: 'อาหารกลางวัน (1 ชั่วโมง)', ru: 'Обед (1 час)' },
        icon: '🥣',
        description: { ko: '미꾸라지를 갈아 만든 한국의 전통 보양식 추어탕을 맛볼 수 있는 곳입니다. 등산 후 허기진 배를 채우기에 안성맞춤입니다.', en: 'A place to taste Chueotang, a traditional Korean health food made from ground loach. Perfect for filling your hungry stomach after hiking.', es: 'Un lugar para probar Chueotang, una comida tradicional coreana saludable hecha de locha molida. Perfecto para llenar tu estómago hambriento después de una caminata.', zh: '在这里可以品尝到由泥鳅制成的传统韩国保健食品——泥鳅汤。非常适合在徒步后填饱饥饿的肚子。', de: 'Ein Ort, um Chueotang zu probieren, ein traditionelles koreanisches Gesundheitsessen aus gemahlenem Schlammpeitzger. Perfekt, um nach dem Wandern den hungrigen Magen zu füllen.', ja: 'ドジョウをすりつぶして作る韓国の伝統的な健康食、チュオタンを味わえる場所です。ハイキング後の空腹を満たすのに最適です。', th: 'สถานที่สำหรับลิ้มลองชูออทัง อาหารเพื่อสุขภาพแบบดั้งเดิมของเกาหลีที่ทำจากปลาโคลนบด เหมาะสำหรับเติมท้องที่หิวโหยหลังจากการเดินป่า', ru: 'Место, где можно попробовать чуотан, традиционное корейское блюдо из молотого вьюна. Идеально подходит, чтобы утолить голод после похода.' },
        category: { ko: '한식', en: 'Korean Food', es: 'Comida Coreana', zh: '韩国菜', de: 'Koreanisches Essen', ja: '韓国料理', th: 'อาหารเกาหลี', ru: 'Корейская кухня' },
        tip: { ko: '산초가루를 조금 넣어 먹으면 풍미가 더욱 살아납니다. 처음이라면 추어튀김도 함께 맛보세요.', en: 'Adding a little sansho powder enhances the flavor. If it\'s your first time, try the fried loach as well.', es: 'Agregar un poco de polvo de sansho realza el sabor. Si es tu primera vez, prueba también la locha frita.', zh: '加入少许山椒粉可以增添风味。如果是第一次来，不妨也尝尝炸泥鳅。', de: 'Ein wenig Sansho-Pulver verstärkt den Geschmack. Wenn Sie zum ersten Mal hier sind, probieren Sie auch den frittierten Schlammpeitzger.', ja: '山椒の粉を少し加えると風味が増します。初めてなら、揚げドジョウも試してみてください。', th: 'การเติมผงซันโชเล็กน้อยจะช่วยเพิ่มรสชาติ ถ้าเป็นครั้งแรก ลองชิมปลาโคลนทอดด้วย', ru: 'Добавление небольшого количества порошка санчо усиливает вкус. Если вы здесь впервые, попробуйте также жареного вьюна.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 15분', en: 'Approx. 15 mins', es: 'Aprox. 15 mins', zh: '约15分钟', de: 'Ca. 15 min', ja: '約15分', th: 'ประมาณ 15 นาที', ru: 'Около 15 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korean,soup,chueotang,traditional,food',
      },
      {
        name: { ko: '남성사계시장', en: 'Namsung Four-Season Market', es: 'Mercado de las Cuatro Estaciones de Namsung', zh: '南城四季市场', de: 'Namsung-Vier-Jahreszeiten-Markt', ja: '南城四季市場', th: 'ตลาดสี่ฤดูนัมซอง', ru: 'Рынок четырех сезонов Намсунг' },
        activity: { ko: '시장 구경', en: 'Market Exploring', es: 'Explorar el Mercado', zh: '逛市场', de: 'Markterkundung', ja: '市場散策', th: 'สำรวจตลาด', ru: 'Исследование рынка' },
        address: { ko: '서울 동작구 동작대로29길 47', en: '47 Dongjak-daero 29-gil, Dongjak-gu, Seoul', es: '47 Dongjak-daero 29-gil, Dongjak-gu, Seúl', zh: '首尔铜雀区铜雀大路29街47', de: '47 Dongjak-daero 29-gil, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区銅雀大路29ギル47', th: '47 ทงจัก-แดโร 29-กิล, ทงจัก-กู, โซล', ru: '47 Донджак-дэро 29-гиль, Тонджак-гу, Сеул' },
        time: { ko: '오후 (1.5시간)', en: 'Afternoon (1.5 hrs)', es: 'Tarde (1.5 h)', zh: '下午 (1.5小时)', de: 'Nachmittag (1.5 Std.)', ja: '午後 (1.5時間)', th: 'ช่วงบ่าย (1.5 ชั่วโมง)', ru: 'День (1,5 часа)' },
        icon: '🛍️',
        description: { ko: '활기 넘치는 동네 전통시장입니다. 신선한 과일, 맛있는 길거리 음식, 그리고 현지인들의 삶을 엿볼 수 있는 정겨운 곳입니다.', en: 'A vibrant neighborhood traditional market. A friendly place where you can glimpse fresh fruit, delicious street food, and the lives of locals.', es: 'Un vibrante mercado tradicional de barrio. Un lugar agradable donde puedes echar un vistazo a frutas frescas, deliciosa comida callejera y la vida de los lugareños.', zh: '一个充满活力的邻里传统市场。一个友好的地方，你可以看到新鲜水果、美味的街头小吃和当地人的生活。', de: 'Ein lebhafter traditioneller Nachbarschaftsmarkt. Ein freundlicher Ort, an dem Sie frisches Obst, leckeres Streetfood und das Leben der Einheimischen sehen können.', ja: '活気あふれる地元の伝統市場です。新鮮な果物、美味しいストリートフード、そして地元の人々の生活を垣間見ることができる親しみやすい場所です。', th: 'ตลาดพื้นเมืองที่มีชีวิตชีวาในย่านใกล้เคียง สถานที่ที่เป็นมิตรที่คุณสามารถมองเห็นผลไม้สด อาหารข้างทางแสนอร่อย และชีวิตของผู้คนในท้องถิ่น', ru: 'Оживленный традиционный районный рынок. Дружелюбное место, где можно увидеть свежие фрукты, вкусную уличную еду и жизнь местных жителей.' },
        category: { ko: '시장', en: 'Market', es: 'Mercado', zh: '市场', de: 'Markt', ja: '市場', th: 'ตลาด', ru: 'Рынок' },
        tip: { ko: '저렴하고 맛있는 떡볶이와 튀김은 꼭 먹어봐야 할 메뉴입니다. 다양한 전(부침개)도 맛볼 수 있습니다.', en: 'You must try the cheap and delicious tteokbokki and fried food. You can also taste various jeon (pancakes).', es: 'Debes probar el tteokbokki y la comida frita, baratos y deliciosos. También puedes probar varios jeon (panqueques).', zh: '你一定要尝尝便宜又好吃的炒年糕和油炸食品。你还可以品尝到各种煎饼。', de: 'Sie müssen die billigen und leckeren Tteokbokki und frittierten Speisen probieren. Sie können auch verschiedene Jeon (Pfannkuchen) probieren.', ja: '安くて美味しいトッポッキと揚げ物は必食です。様々なチヂミも味わえます。', th: 'คุณต้องลองต็อกบกกีและของทอดที่ถูกและอร่อย คุณยังสามารถลิ้มรสจอน (แพนเค้ก) ต่างๆ ได้อีกด้วย', ru: 'Обязательно попробуйте дешевые и вкусные ттокпокки и жареную еду. Вы также можете попробовать различные джон (блины).' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 20분', en: 'Approx. 20 mins', es: 'Aprox. 20 mins', zh: '约20分钟', de: 'Ca. 20 min', ja: '約20分', th: 'ประมาณ 20 นาที', ru: 'Около 20 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korean,traditional-market,tteokbokki,street-food',
      },
      {
        name: { ko: '메가박스 아트나인', en: 'Megabox ArtNine', es: 'Megabox ArtNine', zh: 'Megabox ArtNine', de: 'Megabox ArtNine', ja: 'メガボックス・アートナイン', th: 'เมกาบ็อกซ์ อาร์ตไนน์', ru: 'Megabox ArtNine' },
        activity: { ko: '독립영화 감상', en: 'Indie Film Watching', es: 'Ver Cine Independiente', zh: '观看独立电影', de: 'Independent-Filme ansehen', ja: 'インディーズ映画鑑賞', th: 'ชมภาพยนตร์อินดี้', ru: 'Просмотр независимого кино' },
        address: { ko: '서울 동작구 동작대로 89 12층', en: '12F, 89 Dongjak-daero, Dongjak-gu, Seoul', es: '12F, 89 Dongjak-daero, Dongjak-gu, Seúl', zh: '首尔铜雀区铜雀大路89号12楼', de: '12F, 89 Dongjak-daero, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区銅雀大路89 12階', th: 'ชั้น 12, 89 ทงจัก-แดโร, ทงจัก-กู, โซล', ru: '12-й этаж, 89 Донджак-дэро, Тонджак-гу, Сеул' },
        time: { ko: '오후 (2-3시간)', en: 'Afternoon (2-3 hrs)', es: 'Tarde (2-3 h)', zh: '下午 (2-3小时)', de: 'Nachmittag (2-3 Std.)', ja: '午後 (2-3時間)', th: 'ช่วงบ่าย (2-3 ชั่วโมง)', ru: 'День (2-3 часа)' },
        icon: '🎬',
        link: 'https://www.megabox.co.kr',
        website: 'https://www.megabox.co.kr',
        description: { ko: '예술영화와 독립영화를 전문으로 상영하는 작은 영화관입니다. 대형 영화관과는 다른 특별한 감성을 느낄 수 있습니다.', en: 'A small cinema specializing in art and independent films. You can feel a special sensibility different from large cinemas.', es: 'Un pequeño cine especializado en películas de arte e independientes. Puedes sentir una sensibilidad especial diferente a la de los grandes cines.', zh: '一家专门放映艺术和独立电影的小型电影院。你可以感受到与大型电影院不同的特殊情感。', de: 'Ein kleines Kino, das auf Kunst- und Independent-Filme spezialisiert ist. Sie können eine besondere Sensibilität spüren, die sich von großen Kinos unterscheidet.', ja: 'アート映画やインディーズ映画を専門に上映する小さな映画館です。大きな映画館とは違う特別な感性を感じることができます。', th: 'โรงภาพยนตร์ขนาดเล็กที่เชี่ยวชาญด้านภาพยนตร์ศิลปะและภาพยนตร์อิสระ คุณจะสัมผัสได้ถึงความรู้สึกพิเศษที่แตกต่างจากโรงภาพยนตร์ขนาดใหญ่', ru: 'Небольшой кинотеатр, специализирующийся на авторском и независимом кино. Вы можете почувствовать особую атмосферу, отличную от больших кинотеатров.' },
        category: { ko: '문화', en: 'Culture', es: 'Cultura', zh: '文化', de: 'Kultur', ja: '文化', th: 'วัฒนธรรม', ru: 'Культура' },
        tip: { ko: '영화 상영 후 이어지는 관객과의 대화(GV)가 있는 날에 방문하면 더욱 풍부한 경험을 할 수 있습니다. 상영 시간표를 미리 확인하세요.', en: 'Visiting on a day with a Guest Visit (GV) after the screening provides a richer experience. Check the schedule in advance.', es: 'Visitar en un día con una Visita de Invitado (GV) después de la proyección proporciona una experiencia más rica. Consulte el horario con antelación.', zh: '在放映结束后有嘉宾见面会（GV）的日子参观，会提供更丰富的体验。请提前查看时间表。', de: 'Ein Besuch an einem Tag mit einem Gastbesuch (GV) nach der Vorführung bietet ein reichhaltigeres Erlebnis. Überprüfen Sie den Zeitplan im Voraus.', ja: '上映後のゲストビジット（GV）がある日に訪れると、より豊かな体験ができます。事前にスケジュールを確認してください。', th: 'การเยี่ยมชมในวันที่มี Guest Visit (GV) หลังจากการฉายจะมอบประสบการณ์ที่สมบูรณ์ยิ่งขึ้น ตรวจสอบตารางเวลาล่วงหน้า', ru: 'Посещение в день с встречей с гостями (GV) после показа подарит более яркие впечатления. Проверьте расписание заранее.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 10분', en: 'Approx. 10 mins', es: 'Aprox. 10 mins', zh: '约10分钟', de: 'Ca. 10 min', ja: '約10分', th: 'ประมาณ 10 นาที', ru: 'Около 10 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?indie-cinema,art-film,projector,theater-seats',
      },
      {
        name: { ko: '스시로로', en: 'Sushi Roro', es: 'Sushi Roro', zh: 'Sushi Roro', de: 'Sushi Roro', ja: 'すしロロ', th: 'ซูชิโรโระ', ru: 'Суши Роро' },
        activity: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        address: { ko: '서울 동작구 동작대로23길 29 1층', en: '1F, 29 Dongjak-daero 23-gil, Dongjak-gu, Seoul', es: '1F, 29 Dongjak-daero 23-gil, Dongjak-gu, Seúl', zh: '首尔铜雀区铜雀大路23街29 1楼', de: '1F, 29 Dongjak-daero 23-gil, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区銅雀大路23ギル29 1階', th: 'ชั้น 1, 29 ทงจัก-แดโร 23-กิล, ทงจัก-กู, โซล', ru: '1-й этаж, 29 Донджак-дэро 23-гиль, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        icon: '🍣',
        description: { ko: '가성비 좋은 스시로 유명한 곳입니다. 신선한 재료로 만든 맛있는 스시를 합리적인 가격에 즐길 수 있습니다.', en: 'Famous for its cost-effective sushi. Enjoy delicious sushi made with fresh ingredients at a reasonable price.', es: 'Famoso por su sushi rentable. Disfrute de delicioso sushi hecho con ingredientes frescos a un precio razonable.', zh: '以其高性价比的寿司而闻名。以合理的价格享用由新鲜食材制成的美味寿司。', de: 'Berühmt für sein kostengünstiges Sushi. Genießen Sie köstliches Sushi aus frischen Zutaten zu einem vernünftigen Preis.', ja: 'コストパフォーマンスの良い寿司で有名です。新鮮な食材を使った美味しい寿司をリーズナブルな価格で楽しめます。', th: 'มีชื่อเสียงด้านซูชิที่คุ้มค่า เพลิดเพลินกับซูชิแสนอร่อยที่ทำจากวัตถุดิบสดใหม่ในราคาที่สมเหตุสมผล', ru: 'Известен своими недорогими суши. Наслаждайтесь вкусными суши из свежих ингредиентов по разумной цене.' },
        category: { ko: '일식', en: 'Japanese Food', es: 'Comida Japonesa', zh: '日本料理', de: 'Japanisches Essen', ja: '日本食', th: 'อาหารญี่ปุ่น', ru: 'Японская кухня' },
        tip: { ko: '점심 특선 메뉴가 특히 인기가 많습니다. 저녁에 방문할 경우 예약을 하는 것이 안전합니다.', en: 'The lunch special menu is particularly popular. It is safe to make a reservation when visiting in the evening.', es: 'El menú especial de almuerzo es particularly popular. Es seguro hacer una reserva si visita por la noche.', zh: '午餐特价菜单特别受欢迎。如果晚上来访，最好预订。', de: 'Das Mittagsmenü ist besonders beliebt. Es ist sicher, eine Reservierung für einen Abendbesuch vorzunehmen.', ja: 'ランチの特別メニューが特に人気です。夜に訪れる場合は予約するのが安全です。', th: 'เมนูพิเศษสำหรับมื้อกลางวันเป็นที่นิยมอย่างยิ่ง ควรทำการจองล่วงหน้าหากมาเยือนในตอนเย็น', ru: 'Особой популярностью пользуется специальное обеденное меню. При посещении вечером рекомендуется забронировать столик.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 5분', en: 'Approx. 5 mins', es: 'Aprox. 5 mins', zh: '约5分钟', de: 'Ca. 5 min', ja: '約5分', th: 'ประมาณ 5 นาที', ru: 'Около 5 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?sushi,japanese-food,sashimi,restaurant',
      },
      {
        name: { ko: '엔트리55 재즈바 사당점', en: 'Entry 55 Jazz Bar (Sadang)', es: 'Bar de Jazz Entry 55 (Sadang)', zh: 'Entry 55爵士酒吧（舍堂店）', de: 'Entry 55 Jazz Bar (Sadang)', ja: 'エントリー55ジャズバー（舎堂店）', th: 'เอนทรี 55 แจ๊สบาร์ (สาขาซาดัง)', ru: 'Джаз-бар Entry 55 (Саданг)' },
        activity: { ko: '음악 & 주류', en: 'Music & Drinks', es: 'Música y Bebidas', zh: '音乐与饮品', de: 'Musik & Getränke', ja: '音楽＆ドリンク', th: 'ดนตรีและเครื่องดื่ม', ru: 'Музыка и напитки' },
        address: { ko: '서울 동작구 동작대로1길 18 B-102', en: 'B-102, 18 Dongjak-daero 1-gil, Dongjak-gu, Seoul', es: 'B-102, 18 Dongjak-daero 1-gil, Dongjak-gu, Seúl', zh: '首尔铜雀区铜雀大路1街18 B-102', de: 'B-102, 18 Dongjak-daero 1-gil, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区銅雀大路1ギル18 B-102', th: 'B-102, 18 ทงจัก-แดโร 1-กิล, ทงจัก-กู, โซล', ru: 'B-102, 18 Донджак-дэро 1-гиль, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        link: 'https://www.instagram.com/entry55_official',
        website: 'https://www.instagram.com/entry55_official',
        icon: '🎷',
        description: { ko: '라이브 재즈 공연을 감상하며 칵테일을 즐길 수 있는 분위기 좋은 바입니다. 로맨틱한 밤을 보내기에 완벽한 장소입니다.', en: 'A cozy bar where you can enjoy cocktails while listening to live jazz performances. Perfect for a romantic night.', es: 'Un bar acogedor donde puedes disfrutar de cócteles mientras escuchas actuaciones de jazz en vivo. Perfecto para una noche romántica.', zh: '一个舒适的酒吧，您可以在欣赏现场爵士乐表演的同时享用鸡尾酒。非常适合度过一个浪漫的夜晚。', de: 'Eine gemütliche Bar, in der Sie Cocktails genießen und Live-Jazz-Auftritten lauschen können. Perfekt für einen romantischen Abend.', ja: '生のジャズ演奏を聴きながらカクテルを楽しめる雰囲気の良いバーです。ロマンチックな夜を過ごすのに最適な場所です。', th: 'บาร์บรรยากาศสบายๆ ที่คุณสามารถเพลิดเพลินกับค็อกเทลพร้อมฟังการแสดงดนตรีแจ๊สสด เหมาะสำหรับค่ำคืนที่โรแมนติก', ru: 'Уютный бар, где можно наслаждаться коктейлями под живую джазовую музыку. Идеально подходит для романтического вечера.' },
        category: { ko: '바', en: 'Bar', es: 'Bar', zh: '酒吧', de: 'Bar', ja: 'バー', th: 'บาร์', ru: 'Бар' },
        tip: { ko: '공연이 있는 날과 시간을 미리 확인하고 방문하세요. 좋은 자리를 원한다면 예약을 추천합니다.', en: 'Check the performance dates and times in advance. Reservations are recommended for good seats.', es: 'Consulte las fechas y horarios de las actuaciones con antelación. Se recomiendan las reservas para conseguir buenos asientos.', zh: '请提前查看演出日期和时间。建议预订好座位。', de: 'Überprüfen Sie die Aufführungstermine und -zeiten im Voraus. Reservierungen für gute Plätze werden empfohlen.', ja: '公演の日時を事前に確認してください。良い席を確保したい場合は予約をお勧めします。', th: 'ตรวจสอบวันและเวลาแสดงล่วงหน้า แนะนำให้จองที่นั่งดีๆ', ru: 'Заранее проверьте даты и время выступлений. Для хороших мест рекомендуется бронирование.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 2분', en: 'Approx. 2 mins', es: 'Aprox. 2 mins', zh: '约2分钟', de: 'Ca. 2 min', ja: '約2分', th: 'ประมาณ 2 นาที', ru: 'Около 2 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?jazz-bar,live-music,saxophone,cocktail-lounge',
      },
    ]
  },
  {
    day: 3,
    theme: { ko: '예술, 브런치, 그리고 강변의 여유', en: 'Art, Brunch, & Riverside Leisure', es: 'Arte, Brunch y Ocio junto al Río', zh: '艺术、早午餐与江边休闲', de: 'Kunst, Brunch & Freizeit am Flussufer', ja: 'アート、ブランチ、そして川辺の憩い', th: 'ศิลปะ บรันช์ และการพักผ่อนริมแม่น้ำ', ru: 'Искусство, бранч и отдых у реки' },
    locations: [
      {
        name: { ko: '더인카페', en: 'The Inn Cafe', es: 'Café The Inn', zh: 'The Inn咖啡馆', de: 'Das Inn Café', ja: 'ジ・イン・カフェ', th: 'ดิ อินน์ คาเฟ่', ru: 'Кафе The Inn' },
        activity: { ko: '브런치', en: 'Brunch', es: 'Brunch', zh: '早午餐', de: 'Brunch', ja: 'ブランチ', th: 'บรันช์', ru: 'Бранч' },
        address: { ko: '서울 관악구 남현1길 51 범평빌딩 8층', en: '8F, Beompyeong Building, 51 Namhyeon 1-gil, Gwanak-gu, Seoul', es: '8F, Edificio Beompyeong, 51 Namhyeon 1-gil, Gwanak-gu, Seúl', zh: '首尔冠岳区南岘1街51号泛平大厦8楼', de: '8F, Beompyeong-Gebäude, 51 Namhyeon 1-gil, Gwanak-gu, Seoul', ja: 'ソウル市冠岳区南峴1ギル51 ボムピョンビル8階', th: 'ชั้น 8 อาคารบอมพยอง 51 นัมฮยอน 1-กิล เขตกวานัก โซล', ru: '8-й этаж, здание Бомпен, 51 Намхён 1-гиль, Кванак-гу, Сеул' },
        time: { ko: '오전', en: 'Morning', es: 'Mañana', zh: '上午', de: 'Vormittag', ja: '午前', th: 'ช่วงเช้า', ru: 'Утро' },
        icon: '🥐',
        description: { ko: '양식 및 샐러드 전문 음식점입니다. 여유로운 아침을 시작하며 여행의 마지막 날을 계획해보세요.', en: 'A restaurant specializing in Western food and salads. Start your morning leisurely and plan the last day of your trip.', es: 'Un restaurante especializado en comida occidental y ensaladas. Comience su mañana tranquilamente y planifique el último día de su viaje.', zh: '一家专门经营西餐和沙拉的餐厅。悠闲地开始您的早晨，并计划您旅行的最后一天。', de: 'Ein Restaurant, das auf westliche Speisen und Salate spezialisiert ist. Beginnen Sie Ihren Morgen gemütlich und planen Sie den letzten Tag Ihrer Reise.', ja: '洋食とサラダを専門とするレストランです。のんびりとした朝をスタートさせ、旅の最終日の計画を立てましょう。', th: 'ร้านอาหารที่เชี่ยวชาญด้านอาหารตะวันตกและสลัด เริ่มต้นเช้าวันใหม่อย่างสบายๆ และวางแผนวันสุดท้ายของทริป', ru: 'Ресторан, специализирующийся на европейской кухне и салатах. Начните утро не спеша и спланируйте последний день вашей поездки.' },
        category: { ko: '양식', en: 'Western Food', es: 'Comida Occidental', zh: '西餐', de: 'Westliches Essen', ja: '洋食', th: 'อาหารตะวันตก', ru: 'Европейская кухня' },
        tip: { ko: '운영 시간: 화-금(11:00-21:00), 토-일(11:30-21:00), 월요일 휴무. 야외 테라스 자리가 인기가 많습니다.', en: 'Hours: Tue-Fri (11:00-21:00), Sat-Sun (11:30-21:00), Closed Mondays. The outdoor terrace seats are popular.', es: 'Horario: Mar-Vie (11:00-21:00), Sáb-Dom (11:30-21:00), Lunes cerrado. Los asientos de la terraza al aire libre son populares.', zh: '营业时间：周二至周五（11:00-21:00），周六至周日（11:30-21:00），周一休息。室外露台座位很受欢迎。', de: 'Öffnungszeiten: Di-Fr (11:00-21:00), Sa-So (11:30-21:00), montags geschlossen. Die Sitzplätze auf der Außenterrasse sind beliebt.', ja: '営業時間：火〜金（11:00〜21:00）、土〜日（11:30〜21:00）、月曜定休。屋外のテラス席が人気です。', th: 'เวลาทำการ: อังคาร-ศุกร์ (11:00-21:00), เสาร์-อาทิตย์ (11:30-21:00), ปิดวันจันทร์ ที่นั่งบนระเบียงด้านนอกเป็นที่นิยม', ru: 'Часы работы: Вт-Пт (11:00-21:00), Сб-Вс (11:30-21:00), Пн - выходной. Места на открытой террасе пользуются популярностью.' },
        travelInfoToHere: { mode: { ko: '시작', en: 'Start', es: 'Inicio', zh: '开始', de: 'Start', ja: '開始', th: 'เริ่มต้น', ru: 'Начало' }, duration: { ko: '여정이 시작됩니다!', en: 'Your journey begins!', es: '¡Tu viaje comienza!', zh: '您的旅程开始了！', de: 'Deine Reise beginnt!', ja: '旅の始まりです！', th: 'การเดินทางของคุณเริ่มต้นขึ้นแล้ว!', ru: 'Ваше путешествие начинается!' } },
        naverMapLink: 'https://map.naver.com/p/entry/place/1997348073',
        hideGoogleMap: true,
        imageUrl: 'https://source.unsplash.com/800x600/?brunch,cafe,salad,avocado-toast,outdoor-terrace',
      },
      {
        name: { ko: '서울시립 남서울미술관', en: 'Nam-Seoul Museum of Art', es: 'Museo de Arte de Nam-Seúl', zh: '南首尔美术馆', de: 'Nam-Seoul Kunstmuseum', ja: 'ソウル市立南ソウル美術館', th: 'พิพิธภัณฑ์ศิลปะนัมโซล', ru: 'Нам-Сеульский художественный музей' },
        activity: { ko: '미술관 관람', en: 'Museum Visit', es: 'Visita al Museo', zh: '参观博物馆', de: 'Museumsbesuch', ja: '美術館訪問', th: 'เยี่ยมชมพิพิธภัณฑ์', ru: 'Посещение музея' },
        address: { ko: '서울 관악구 남부순환로 2076', en: '2076 Nambusunhwan-ro, Gwanak-gu, Seoul', es: '2076 Nambusunhwan-ro, Gwanak-gu, Seúl', zh: '首尔冠岳区南部循环路2076', de: '2076 Nambusunhwan-ro, Gwanak-gu, Seoul', ja: 'ソウル市冠岳区南部循環路2076', th: '2076 นัมบูซุนฮวาน-โร, กวานัก-กู, โซล', ru: '2076 Намбусунхван-ро, Кванак-гу, Сеул' },
        time: { ko: '오전', en: 'Morning', es: 'Mañana', zh: '上午', de: 'Vormittag', ja: '午前', th: 'ช่วงเช้า', ru: 'Утро' },
        link: 'https://sema.seoul.go.kr',
        website: 'https://sema.seoul.go.kr',
        icon: '🏛️',
        description: { ko: '아름다운 근대 건축물에 자리한 미술관입니다. 다양한 현대 미술 작품을 감상하며 예술적 영감을 얻을 수 있습니다.', en: 'An art museum housed in a beautiful modern building. Get artistic inspiration while appreciating various contemporary artworks.', es: 'Un museo de arte ubicado en un hermoso edificio moderno. Obtenga inspiración artística mientras aprecia diversas obras de arte contemporáneas.', zh: '一座坐落在美丽现代建筑中的艺术博物馆。在欣赏各种当代艺术品的同时获得艺术灵感。', de: 'Ein Kunstmuseum in einem schönen modernen Gebäude. Holen Sie sich künstlerische Inspiration, während Sie verschiedene zeitgenössische Kunstwerke betrachten.', ja: '美しい近代建築の中にある美術館です。様々な現代美術作品を鑑賞しながら、芸術的なインスピレーションを得ることができます。', th: 'พิพิธภัณฑ์ศิลปะที่ตั้งอยู่ในอาคารสมัยใหม่ที่สวยงาม รับแรงบันดาลใจทางศิลปะขณะชื่นชมผลงานศิลปะร่วมสมัยต่างๆ', ru: 'Художественный музей, расположенный в красивом современном здании. Получите художественное вдохновение, любуясь различными произведениями современного искусства.' },
        category: { ko: '미술관', en: 'Art Museum', es: 'Museo de Arte', zh: '美术馆', de: 'Kunstmuseum', ja: '美術館', th: 'พิพิธภัณฑ์ศิลปะ', ru: 'Художественный музей' },
        tip: { ko: '입장료는 무료입니다. 건물 자체가 예술 작품이므로 건축물의 아름다움도 함께 감상해보세요.', en: 'Admission is free. The building itself is a work of art, so enjoy its beauty as well.', es: 'La entrada es gratuita. El edificio en sí es una obra de arte, así que disfrute también de su belleza.', zh: '门票是免费的。建筑物本身就是一件艺术品，所以也请欣赏它的美丽。', de: 'Der Eintritt ist frei. Das Gebäude selbst ist ein Kunstwerk, genießen Sie also auch seine Schönheit.', ja: '入場は無料です。建物自体が芸術作品なので、その美しさも一緒に楽しんでください。', th: 'ค่าเข้าชมฟรี ตัวอาคารเองก็เป็นผลงานศิลปะ ดังนั้นจึงควรเพลิดเพลินกับความงามของมันด้วย', ru: 'Вход бесплатный. Само здание - произведение искусства, так что наслаждайтесь и его красотой.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 15분', en: 'Approx. 15 mins', es: 'Aprox. 15 mins', zh: '约15分钟', de: 'Ca. 15 min', ja: '約15分', th: 'ประมาณ 15 นาที', ru: 'Около 15 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?art-museum,gallery-building,sculpture,exhibition',
      },
      {
        name: { ko: '중앙대학교 캠퍼스', en: 'Chung-Ang University Campus', es: 'Campus de la Universidad de Chung-Ang', zh: '中央大学校园', de: 'Campus der Chung-Ang-Universität', ja: '中央大学キャンパス', th: 'วิทยาเขตมหาวิทยาลัยจุงอัง', ru: 'Кампус университета Чунг-Анг' },
        activity: { ko: '캠퍼스 산책', en: 'Campus Walk', es: 'Paseo por el Campus', zh: '校园漫步', de: 'Campus-Spaziergang', ja: 'キャンパス散策', th: 'เดินเล่นในวิทยาเขต', ru: 'Прогулка по кампусу' },
        address: { ko: '서울 동작구 흑석로 84', en: '84 Heukseok-ro, Dongjak-gu, Seoul', es: '84 Heukseok-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区黑石路84', de: '84 Heukseok-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区黒石路84', th: '84 ฮึกซอก-โร, ทงจัก-กู, โซล', ru: '84 Хыксок-ро, Тонджак-гу, Сеул' },
        time: { ko: '오후', en: 'Afternoon', es: 'Tarde', zh: '下午', de: 'Nachmittag', ja: '午後', th: 'ช่วงบ่าย', ru: 'День' },
        icon: '🎓',
        description: { ko: '젊음과 활기가 넘치는 대학교 캠퍼스를 거닐어보세요. 캠퍼스 언덕에서 바라보는 한강의 전망이 아름답습니다.', en: 'Stroll through the youthful and vibrant university campus. The view of the Han River from the campus hill is beautiful.', es: 'Pasee por el campus universitario, joven y vibrante. La vista del río Han desde la colina del campus es hermosa.', zh: '漫步在年轻而充满活力的大学校园里。从校园山丘上看到的汉江景色非常美丽。', de: 'Schlendern Sie über den jugendlichen und lebendigen Universitätscampus. Die Aussicht auf den Han-Fluss vom Campus-Hügel ist wunderschön.', ja: '若々しく活気のある大学のキャンパスを散策しましょう。キャンパスの丘から見る漢江の眺めは美しいです。', th: 'เดินเล่นในวิทยาเขตของมหาวิทยาลัยที่เต็มไปด้วยความเยาว์วัยและมีชีวิตชีวา ทิวทัศน์ของแม่น้ำฮันจากเนินเขาในวิทยาเขตนั้นสวยงามมาก', ru: 'Прогуляйтесь по молодому и оживленному университетскому кампусу. Вид на реку Хан с холма кампуса прекрасен.' },
        category: { ko: '산책', en: 'Walk', es: 'Paseo', zh: '散步', de: 'Spaziergang', ja: '散策', th: 'เดินเล่น', ru: 'Прогулка' },
        tip: { ko: '봄에는 벚꽃이 만개하여 더욱 아름답습니다. 학생 식당에서 저렴하게 식사를 해결하는 것도 좋은 방법입니다.', en: 'It is even more beautiful in spring when the cherry blossoms are in full bloom. Eating cheaply at the student cafeteria is also a good option.', es: 'Es aún más hermoso en primavera, cuando los cerezos están en plena floración. Comer barato en la cafetería de estudiantes también es una buena opción.', zh: '春天樱花盛开时更美。在学生食堂便宜地吃饭也是一个不错的选择。', de: 'Im Frühling, wenn die Kirschblüten in voller Blüte stehen, ist es noch schöner. Günstig in der Mensa zu essen ist auch eine gute Option.', ja: '春には桜が満開になり、さらに美しいです。学生食堂で安く食事をするのも良い方法です。', th: 'จะยิ่งสวยงามมากขึ้นในฤดูใบใบไม้ผลิเมื่อดอกซากุระบานสะพรั่งเต็มที่ การรับประทานอาหารราคาถูกที่โรงอาหารนักเรียนก็เป็นทางเลือกที่ดีเช่นกัน', ru: 'Весной, когда цветут вишни, здесь еще красивее. Дешево поесть в студенческой столовой - тоже хороший вариант.' },
        travelInfoToHere: { 
            mode: { ko: '대중교통', en: 'Public Transit', es: 'Transporte Público', zh: '公共交通', de: 'Öffentliche Verkehrsmittel', ja: '公共交通', th: 'ขนส่งสาธารณะ', ru: 'Общественный транспорт' }, 
            duration: { ko: '약 25분', en: 'Approx. 25 mins', es: 'Aprox. 25 mins', zh: '约25分钟', de: 'Ca. 25 min', ja: '約25分', th: 'ประมาณ 25 นาที', ru: 'Около 25 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?korea,university,campus,library,student-life',
      },
      {
        name: { ko: '카스테라 공방', en: 'Castera Workshop', es: 'Taller de Castera', zh: '卡斯特拉工坊', de: 'Castera-Werkstatt', ja: 'カステラ工房', th: 'เวิร์คช็อปคาสเตรา', ru: 'Мастерская Кастера' },
        activity: { ko: '체험 공방', en: 'Workshop', es: 'Taller', zh: '工作坊', de: 'Werkstatt', ja: 'ワークショップ', th: 'เวิร์คช็อป', ru: 'Мастер-класс' },
        address: { ko: '서울 동작구 서달로 150 이랜드 해가든상가 1층 127호', en: 'Unit 127, 1F, E-Land Haegadeun Sangga, 150 Seodal-ro, Dongjak-gu, Seoul', es: 'Unidad 127, 1F, E-Land Haegadeun Sangga, 150 Seodal-ro, Dongjak-gu, Seúl', zh: '首尔铜雀区西达路150号E-Land Haegadeun商场1楼127室', de: 'Einheit 127, 1F, E-Land Haegadeun Sangga, 150 Seodal-ro, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区西達路150 E-Landヘガドゥン商店街1階127号', th: 'ยูนิต 127 ชั้น 1 E-Land Haegadeun Sangga, 150 ซอดัล-โร, ทงจัก-กู, โซล', ru: 'Блок 127, 1-й этаж, E-Land Haegadeun Sangga, 150 Содаль-ро, Тонджак-гу, Сеул' },
        time: { ko: '오후', en: 'Afternoon', es: 'Tarde', zh: '下午', de: 'Nachmittag', ja: '午後', th: 'ช่วงบ่าย', ru: 'День' },
        link: 'https://www.instagram.com/casstella2024/',
        website: 'https://www.instagram.com/casstella2024/',
        icon: '🎨',
        description: { ko: '글라스아트, 등공예, 썬캐쳐 만들기 등 다양한 원데이 클래스를 체험할 수 있는 공방입니다. 나만의 기념품을 만들어보세요.', en: 'A workshop where you can experience various one-day classes like glass art, rattan crafts, and suncatcher making. Make your own unique souvenir!', es: 'Un taller donde puedes experimentar varias clases de un día como arte en vidrio, artesanía de ratán y fabricación de atrapasoles. ¡Haz tu propio recuerdo único!', zh: '一个可以体验各种一日课程的工作室，如玻璃艺术、藤条工艺和捕梦网制作。制作您自己独特的纪念品！', de: 'Eine Werkstatt, in der Sie verschiedene Tageskurse wie Glaskunst, Rattanhandwerk und Sonnenfängerherstellung erleben können. Machen Sie Ihr eigenes einzigartiges Souvenir!', ja: 'グラスアート、籐工芸、サンキャッチャー作りなど、さまざまなワンデイクラスを体験できる工房です。自分だけのユニークなお土産を作りましょう！', th: 'เวิร์คช็อปที่คุณสามารถสัมผัสประสบการณ์คลาสวันเดียวต่างๆ เช่น ศิลปะแก้ว งานหัตถกรรมหวาย และการทำเครื่องดักฝัน ทำของที่ระลึกที่เป็นเอกลักษณ์ของคุณเอง!', ru: 'Мастерская, где можно посетить различные однодневные мастер-классы, такие как роспись по стеклу, плетение из ротанга и изготовление ловцов солнца. Сделайте свой собственный уникальный сувенир!' },
        category: { ko: '공방', en: 'Workshop', es: 'Taller', zh: '工作坊', de: 'Werkstatt', ja: '工房', th: 'เวิร์คช็อป', ru: 'Мастерская' },
        tip: { ko: '수업은 예약이 필요할 수 있으니 방문 전 인스타그램이나 블로그를 확인해보세요.', en: 'Classes may require a reservation, so check their Instagram or blog before visiting.', es: 'Las clases pueden requerir una reserva, así que consulte su Instagram o blog antes de visitar.', zh: '课程可能需要预约，因此在访问前请查看他们的Instagram或博客。', de: 'Kurse erfordern möglicherweise eine Reservierung. Überprüfen Sie daher vor Ihrem Besuch deren Instagram oder Blog.', ja: 'クラスは予約が必要な場合があるので、訪問前にインスタグラムやブログを確認してください。', th: 'คลาสอาจต้องจองล่วงหน้า ดังนั้นโปรดตรวจสอบ Instagram หรือบล็อกของพวกเขาก่อนเข้าชม', ru: 'Для занятий может потребоваться бронирование, поэтому перед посещением проверьте их Instagram или блог.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 3분', en: 'Approx. 3 mins', es: 'Aprox. 3 mins', zh: '约3分钟', de: 'Ca. 3 min', ja: '約3分', th: 'ประมาณ 3 นาที', ru: 'Около 3 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?art-workshop,hand-craft,pottery-making,painting',
      },
      {
        name: { ko: '우부(UBU) 코리안 다이닝', en: 'UBU Korean Dining', es: 'UBU Korean Dining', zh: 'UBU韩国餐厅', de: 'UBU Korean Dining', ja: 'UBUコリアンダイニング', th: 'UBU โคเรียนไดนิ่ง', ru: 'UBU Korean Dining' },
        activity: { ko: '식사', en: 'Dining', es: 'Cena', zh: '用餐', de: 'Essen', ja: '食事', th: 'รับประทานอาหาร', ru: 'Ресторан' },
        address: { ko: '서울 동작구 서달로14길 25 1층', en: '1F, 25 Seodal-ro 14-gil, Dongjak-gu, Seoul', es: '1F, 25 Seodal-ro 14-gil, Dongjak-gu, Seúl', zh: '首尔铜雀区西达路14街25 1楼', de: '1F, 25 Seodal-ro 14-gil, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区西達路14ギル25 1階', th: 'ชั้น 1, 25 ซอดัล-โร 14-กิล, ทงจัก-กู, โซล', ru: '1-й этаж, 25 Содаль-ро 14-гиль, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        link: 'https://www.instagram.com/ubu.jumbo',
        website: 'https://www.instagram.com/ubu.jumbo',
        icon: '🍚',
        description: { ko: '신선한 재료로 만든 유부초밥과 김밥이 인기인 식당입니다. 묵은지참치김밥, 크래미 유부초밥 등이 맛있습니다. 포장도 가능합니다.', en: 'A popular restaurant serving yubuchobap (fried tofu rice balls) and gimbap made with fresh ingredients. The Mukeunji Tuna Gimbap and Creamy Crab Yubuchobap are delicious. Takeout is also available.', es: 'Un restaurante popular que sirve yubuchobap (bolas de arroz de tofu frito) y gimbap hechos con ingredientes frescos. El Mukeunji Tuna Gimbap y el Creamy Crab Yubuchobap son deliciosos. También se puede pedir para llevar.', zh: '一家受欢迎的餐厅，供应以新鲜食材制作的油豆腐饭团和紫菜包饭。熟成泡菜金枪鱼紫菜包饭和奶油蟹肉油豆腐饭团非常美味。也提供外卖。', de: 'Ein beliebtes Restaurant, das Yubuchobap (frittierte Tofu-Reisbällchen) und Gimbap aus frischen Zutaten serviert. Das Mukeunji-Thunfisch-Gimbap und das cremige Krabben-Yubuchobap sind köstlich. Auch zum Mitnehmen erhältlich.', ja: '新鮮な食材を使った油揚げ寿司とキンパが人気のレストランです。熟成キムチツナキンパとクリーミーなカニカマ油揚げ寿司が美味しいです。テイクアウトも可能です。', th: 'ร้านอาหารยอดนิยมที่ให้บริการยูบูโชบับ (ข้าวปั้นเต้าหู้ทอด) และคิมบับที่ทำจากวัตถุดิบสดใหม่ กิมบับทูน่ามูคึนจิและยูบูโชบับปูครีมอร่อยมาก มีบริการสั่งกลับบ้านด้วย', ru: 'Популярный ресторан, где подают юбучобап (рисовые шарики с жареным тофу) и кимбап из свежих ингредиентов. Кимбап с тунцом мукынчжи и юбучобап с крабовым кремом очень вкусные. Возможен заказ на вынос.' },
        category: { ko: '한식', en: 'Korean Food', es: 'Comida Coreana', zh: '韩国菜', de: 'Koreanisches Essen', ja: '韓国料理', th: 'อาหารเกาหลี', ru: 'Корейская кухня' },
        tip: { ko: '점보 사이즈 후토마키가 이곳의 시그니처 메뉴입니다. 여러 명이 함께 방문할 때 주문하기 좋습니다.', en: 'The jumbo-sized futomaki is the signature menu here. It\'s great to order when visiting with several people.', es: 'El futomaki de tamaño jumbo es el menú estrella aquí. Es genial para pedir cuando se visita con varias personas.', zh: '巨型太卷是这里的招牌菜单。与多人一起参观时点餐很棒。', de: 'Das jumbo-große Futomaki ist hier das Signature-Menü. Es eignet sich hervorragend zur Bestellung bei einem Besuch mit mehreren Personen.', ja: 'ジャンボサイズの太巻きがここの名物メニューです。数人で訪れる際に注文するのに最適です。', th: 'ฟูโตมากิขนาดจัมโบ้เป็นเมนูเด็ดของที่นี่ เหมาะสำหรับการสั่งเมื่อมากับเพื่อนหลายคน', ru: 'Футомаки размера "джамбо" - фирменное блюдо здесь. Отлично подходит для заказа, когда вы приходите с несколькими людьми.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 5분', en: 'Approx. 5 mins', es: 'Aprox. 5 mins', zh: '约5分钟', de: 'Ca. 5 min', ja: '約5分', th: 'ประมาณ 5 นาที', ru: 'Около 5 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?kimbap,yubuchobap,korean-food,dining',
      },
      {
        name: { ko: '한강 산책 (흑석나루)', en: 'Han River Walk (Heukseok Ferry)', es: 'Paseo por el Río Han (Ferry de Heukseok)', zh: '汉江散步（黑石渡口）', de: 'Spaziergang am Han-Fluss (Fähre Heukseok)', ja: '漢江散策（黒石ナル）', th: 'เดินเล่นริมแม่น้ำฮัน (ท่าเรือฮึกซอก)', ru: 'Прогулка по реке Хан (пристань Хыксок)' },
        activity: { ko: '산책', en: 'Walk', es: 'Paseo', zh: '散步', de: 'Spaziergang', ja: '散策', th: 'เดินเล่น', ru: 'Прогулка' },
        address: { ko: '서울 동작구 흑석동', en: 'Heukseok-dong, Dongjak-gu, Seoul', es: 'Heukseok-dong, Dongjak-gu, Seúl', zh: '首尔铜雀区黑石洞', de: 'Heukseok-dong, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区黒石洞', th: 'ฮึกซอก-ดง, ทงจัก-กู, โซล', ru: 'Хыксок-донг, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        icon: '🌉',
        description: { ko: '강변을 따라 걸으며 서울의 야경을 즐겨보세요. 시원한 강바람을 맞으며 하루를 마무리하는 평화로운 시간을 가질 수 있습니다.', en: 'Enjoy the night view of Seoul while walking along the riverside. You can have a peaceful time finishing the day with the cool river breeze.', es: 'Disfrute de la vista nocturna de Seúl mientras camina por la orilla del río. Puede tener un tiempo tranquilo terminando el día con la fresca brisa del río.', zh: '沿着江边散步，欣赏首尔的夜景。您可以在凉爽的江风中度过一个宁静的时光，结束一天的生活。', de: 'Genießen Sie den nächtlichen Blick auf Seoul bei einem Spaziergang am Flussufer. Sie können eine friedliche Zeit verbringen und den Tag mit der kühlen Flussbrise ausklingen lassen.', ja: '川辺を歩きながらソウルの夜景をお楽しみください。涼しい川風に吹かれながら一日を締めくくる、平和な時間を過ごせます。', th: 'เพลิดเพลินกับทิวทัศน์ยามค่ำคืนของกรุงโซลขณะเดินเล่นริมแม่น้ำ คุณสามารถมีช่วงเวลาที่เงียบสงบในการสิ้นสุดวันด้วยลมเย็นๆ ริมแม่น้ำ', ru: 'Наслаждайтесь ночным видом Сеула, прогуливаясь по набережной. Вы можете спокойно провести время, завершая день под прохладным речным бризом.' },
        category: { ko: '자연', en: 'Nature', es: 'Naturaleza', zh: '自然', de: 'Natur', ja: '自然', th: 'ธรรมชาติ', ru: 'Природа' },
        tip: { ko: "근처 편의점에서 맥주 한 캔을 사서 마시는 '치맥' 대신 '강맥'을 즐겨보는 것도 특별한 경험입니다.", en: 'Buying a can of beer at a nearby convenience store and enjoying \'gang-maek\' (river-beer) instead of \'chi-maek\' (chicken-beer) is also a special experience.', es: 'Comprar una lata de cerveza en una tienda de conveniencia cercana y disfrutar de \'gang-maek\' (cerveza de río) en lugar de \'chi-maek\' (pollo-cerveza) también es una experiencia especial.', zh: '在附近的便利店买一罐啤酒，享受“江边啤酒”（gang-maek）而不是“炸鸡啤酒”（chi-maek），也是一种特殊的体验。', de: 'Eine Dose Bier in einem nahegelegenen Supermarkt zu kaufen und \'Gang-Maek\' (Flussbier) anstelle von \'Chi-Maek\' (Hühnchen-Bier) zu genießen, ist ebenfalls ein besonderes Erlebnis.', ja: '近くのコンビニでビールを買い、「チメク」（チキンとビール）の代わりに「カンメク」（川とビール）を楽しむのも特別な体験です。', th: 'การซื้อเบียร์กระป๋องที่ร้านสะดวกซื้อใกล้ๆ และเพลิดเพลินกับ "คังแม็ก" (เบียร์ริมแม่น้ำ) แทน "ชิแม็ก" (ไก่กับเบียร์) ก็เป็นประสบการณ์ที่พิเศษเช่นกัน', ru: 'Купить банку пива в ближайшем магазине и насладиться "ган-мэк" (пиво у реки) вместо "чи-мэк" (курица с пивом) - это тоже особый опыт.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 10분', en: 'Approx. 10 mins', es: 'Aprox. 10 mins', zh: '约10分钟', de: 'Ca. 10 min', ja: '約10分', th: 'ประมาณ 10 นาที', ru: 'Около 10 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?seoul,han-river,night-walk,bridge-lights',
      },
      {
        name: { ko: '동작노을카페', en: 'Dongjak Sunset Cafe', es: 'Café Atardecer Dongjak', zh: '铜雀晚霞咖啡馆', de: 'Dongjak Sonnenuntergangs-Café', ja: '銅雀サンセットカフェ', th: 'ทงจักซันเซ็ทคาเฟ่', ru: 'Кафе "Закат в Тонджаке"' },
        activity: { ko: '휴식', en: 'Rest', es: 'Descanso', zh: '休息', de: 'Ruhe', ja: '休憩', th: 'พักผ่อน', ru: 'Отдых' },
        address: { ko: '서울 동작구 동작대로 335', en: '335 Dongjak-daero, Dongjak-gu, Seoul', es: '335 Dongjak-daero, Dongjak-gu, Seúl', zh: '首尔铜雀区铜雀大路335', de: '335 Dongjak-daero, Dongjak-gu, Seoul', ja: 'ソウル市銅雀区銅雀大路335', th: '335 ทงจัก-แดโร, ทงจัก-กู, โซล', ru: '335 Донджак-дэро, Тонджак-гу, Сеул' },
        time: { ko: '저녁', en: 'Dinner', es: 'Cena', zh: '晚餐', de: 'Abendessen', ja: '夕食', th: 'อาหารเย็น', ru: 'Ужин' },
        link: 'https://www.instagram.com/mr.g_9_/',
        website: 'https://www.instagram.com/mr.g_9_/',
        icon: '🌇',
        description: { ko: '한강과 도시의 야경을 한눈에 담을 수 있는 최고의 전망을 자랑하는 카페입니다. 여정의 마지막을 멋진 노을과 함께 마무리하세요.', en: 'A cafe with the best view of the Han River and the city skyline. End your journey with a beautiful sunset.', es: 'Una cafetería con la mejor vista del río Han y el horizonte de la ciudad. Termina tu viaje con una hermosa puesta de sol.', zh: '这家咖啡馆拥有欣赏汉江和城市天际线的最佳视野。在美丽的日落中结束您的旅程。', de: 'Ein Café mit der besten Aussicht auf den Han-Fluss und die Skyline der Stadt. Beenden Sie Ihre Reise mit einem wunderschönen Sonnenuntergang.', ja: '漢江と街のスカイラインを一望できる最高のカフェです。美しい夕日と共に旅を締めくくりましょう。', th: 'คาเฟ่ที่มองเห็นวิวแม่น้ำฮันและเส้นขอบฟ้าของเมืองได้ดีที่สุด จบทริปของคุณด้วยพระอาทิตย์ตกที่สวยงาม', ru: 'Кафе с лучшим видом на реку Хан и городской пейзаж. Завершите свое путешествие прекрасным закатом.' },
        category: { ko: '카페', en: 'Cafe', es: 'Café', zh: '咖啡馆', de: 'Café', ja: 'カフェ', th: 'คาเฟ่', ru: 'Кафе' },
        tip: { ko: '해질녘 시간을 맞춰 방문하는 것이 가장 좋습니다. 미리 자리를 잡고 여유롭게 야경을 감상하세요.', en: 'It is best to visit around sunset. Get a seat in advance and enjoy the night view leisurely.', es: 'Es mejor visitar al atardecer. Consigue un asiento con antelación y disfruta de la vista nocturna tranquilamente.', zh: '最好在日落时分参观。提前找个座位，悠闲地欣赏夜景。', de: 'Am besten besuchen Sie uns um den Sonnenuntergang herum. Sichern Sie sich im Voraus einen Platz und genießen Sie die Nachtansicht gemütlich.', ja: '日没頃に訪れるのがベストです。事前に席を確保し、ゆっくりと夜景をお楽しみください。', th: 'ควรไปเยี่ยมชมช่วงพระอาทิตย์ตกดิน หาที่นั่งล่วงหน้าและเพลิดเพลินกับวิวยามค่ำคืนอย่างสบายๆ', ru: 'Лучше всего приходить на закате. Займите место заранее и не спеша наслаждайтесь ночным видом.' },
        travelInfoToHere: { 
            mode: { ko: '도보', en: 'Walk', es: 'Caminar', zh: '步行', de: 'Gehen', ja: '徒歩', th: 'เดิน', ru: 'Пешком' }, 
            duration: { ko: '약 10분', en: 'Approx. 10 mins', es: 'Aprox. 10 mins', zh: '约10分钟', de: 'Ca. 10 min', ja: '約10分', th: 'ประมาณ 10 นาที', ru: 'Около 10 мин.' } 
        },
        imageUrl: 'https://source.unsplash.com/800x600/?seoul,cafe,sunset,river-view,city-skyline',
      }
    ]
  }
];

export const DONGJAK_LOCATIONS: { [key: string]: { x: number; y: number; keywords: string[] } } = {
  // Day 1
  seoulCemetery: { x: 85, y: 60, keywords: ['seoul national cemetery', '국립서울현충원'] },
  noryangjinMarket: { x: 50, y: 20, keywords: ['noryangjin fish market', '노량진 수산시장'] },
  sayuksinPark: { x: 55, y: 25, keywords: ['sayuksin history park', '사육신역사공원'] },
  dorodoroCoffee: { x: 56, y: 28, keywords: ['dorodoro coffee', '도로도로커피'] },
  yongyangbongjeojeong: { x: 70, y: 40, keywords: ['yongyangbongjeojeong', '용양봉저정'] },
  hwangsaegol: { x: 55, y: 68, keywords: ['hwangsaegol kalguksu', '황새골'] },

  // Day 2
  guksabongTrail: { x: 45, y: 70, keywords: ['guksabong trail', '국사봉'] },
  grandmaChueotang: { x: 50, y: 65, keywords: ['grandma’s gamasot chueotang', '할머니가마솥추어탕'] },
  namsungMarket: { x: 80, y: 85, keywords: ['namsung four-season market', '남성사계시장'] },
  megabox: { x: 82, y: 88, keywords: ['megabox artnine', '메가박스 아트나인'] },
  sushiRoro: { x: 84, y: 90, keywords: ['sushi roro', '스시로로'] },
  entry55: { x: 85, y: 92, keywords: ['entry 55 jazz bar', '엔트리55'] },

  // Day 3
  theInnCafe: { x: 87, y: 84, keywords: ['the inn cafe', '더인카페'] },
  namSeoulMuseum: { x: 89, y: 86, keywords: ['nam-seoul museum of art', '남서울미술관'] },
  chungAngUni: { x: 80, y: 25, keywords: ['chung-ang university', '중앙대학교'] },
  casteraWorkshop: { x: 82, y: 28, keywords: ['castera workshop', '카스테라 공방'] },
  ubuDining: { x: 83, y: 30, keywords: ['ubu korean dining', '우부'] },
  hanRiverWalk: { x: 85, y: 20, keywords: ['han river walk', '한강 산책'] },
  dongjakCafe: { x: 88, y: 55, keywords: ['dongjak sunset cafe', '동작노을카페'] },
};

export const USER_PROVIDED_LOCATIONS = [
  // 음식점
  { name: '보라매 궁중삼계탕', address: '서울 동작구 보라매로5길 43 보라매삼성쉐르빌 117호, 118호', category: '음식점' },
  { name: '옥소반 보라매공원점', address: '서울 동작구 보라매로5가길 16 보라매 아카데미타워 2층 214호', category: '음식점' },
  { name: '서평면옥', address: '서울 동작구 보라매로5길 15 전문건설회관 지하1층', category: '음식점' },
  { name: '이태리로 간 고등어', address: '서울 동작구 보라매로5가길 16 보라매아카데미타워 2층', category: '음식점' },
  { name: '쿠우쿠우 골드 보라매공원점', address: '서울 동작구 보라매로5가길 16 보라매아카데미타워 7층', category: '음식점' },
  { name: '등나무집', address: '서울 동작구 대림로 52', category: '음식점' },
  { name: '뭉텅 신대방삼거리점', address: '서울 동작구 상도로 54 1층', category: '음식점' },
  { name: '카츠디나인 신대방삼거리 본점', address: '서울 동작구 국사봉1길 12-5 1층', category: '음식점' },
  { name: '빕스 대방점', address: '서울 동작구 노량진로 2', category: '음식점' },
  { name: '규동집 노량진본점', address: '서울 동작구 만양로14가길 1 1층', category: '음식점' },
  { name: '정동진 삼계탕', address: '서울 동작구 만양로 85', category: '음식점' },
  { name: '조선화로집 상도역점', address: '서울 동작구 상도로 263-6', category: '음식점' },
  { name: '가야성 숭실대점', address: '서울 동작구 상도로62길 33', category: '음식점' },
  { name: '샤브몰 서울사당점', address: '서울 동작구 사당로 196 2층 203호', category: '음식점' },
  { name: '몽갈비 사당이수본점', address: '서울 동작구 사당로 264 1층', category: '음식점' },
  { name: '후라토식당 이수직영점', address: '서울 동작구 사당로28길 6 2층', category: '음식점' },
  { name: '코시 이수점', address: '서울 동작구 사당로 300 1층 126호, 127호', category: '음식점' },
  { name: '이수가 본점', address: '서울 동작구 동작대로29가길 30 1층', category: '음식점' },
  { name: '유정우함흥냉면', address: '서울 동작구 동작대로29다길 7-1', category: '음식점' },
  { name: '호요', address: '서울 동작구 동작대로13길 6-7 1층 호요', category: '음식점' },
  { name: '램타운양꼬치 사당점', address: '서울 동작구 동작대로1길 28', category: '음식점' },
  { name: '해물한소반 사당직영점', address: '서울 동작구 동작대로1길 18', category: '음식점' },
  { name: '농부쌈밥', address: '서울 동작구 사당로30길 19', category: '음식점' },
  { name: '사당1동 먹자골목', address: '서울 동작구 사당동 1105', category: '먹자거리' },

  // 카페
  { name: '키키젤라또', address: '서울 동작구 동작대로1길 39 1층', category: '카페' },
  { name: '카페 우야우', address: '서울 동작구 사당로28길 63 1층 카페 우야우', category: '카페' },
  { name: '더미커피 상도점', address: '서울 동작구 강남초등8길 20 1층', category: '카페' },
  { name: '카페 레인보우', address: '서울 동작구 상도로38길 3-2 1층, 2층', category: '카페' },
  { name: '브루클린커피 대방역점', address: '서울 동작구 노량진로 26 1층', category: '카페' },
  { name: '스페이스노들케이', address: '서울 동작구 현충로 11 1층', category: '카페' },
  { name: '프랑세즈', address: '서울 동작구 현충로 96', category: '카페' },
  { name: '잔디속에있다고상상을해', address: '서울 동작구 상도로 265-30 2층', category: '카페' },
  { name: '오누이', address: '서울 동작구 시흥대로 676 혜석빌딩', category: '카페' },
  { name: '세녹', address: '서울 동작구 사당로 304', category: '카페' },
  { name: '딥다이브 이수역점', address: '서울 동작구 사당로 302 1층', category: '카페' },

  // 보드게임 카페
  { name: '보드게임카페 레드버튼 이수역점', address: '서울 동작구 동작대로27길 5 지안프라자 b동 3층 보드게임카페 레드버튼 이수역점', category: '보드게임' },
  { name: '보드게임하자', address: '서울 동작구 만양로14길 25 지하1층', category: '보드게임' },
  { name: '셔플 보드게임 아지트', address: '서울 동작구 상도로 116 지하', category: '보드게임' },
  { name: '미르보드카페', address: '서울 동작구 흑석로 81-6 지하1층', category: '보드게임' },

  // 방탈출 카페
  { name: '도어이스케이프 이수역점', address: '서울 동작구 동작대로27가길 14 3층', category: '방탈출' },
  { name: '셜록홈즈 노량진점', address: '서울 동작구 만양로 102-2 지하1층', category: '방탈출' },

  // 탁구장
  { name: '통통통탁구', address: '서울 동작구 양녕로 268-1 B1', category: '탁구장' },
  { name: '오늘은핑퐁 사당점', address: '서울 동작구 동작대로 69 지하1층', category: '탁구장' },
  { name: '김탁구 노량진점', address: '서울 동작구 만양로 100 301호', category: '탁구장' },
  { name: '김탁구 중앙대점', address: '서울 동작구 서달로14가길 1 3층 301호', category: '탁구장' },

  // 당구장
  { name: '김치당구클럽', address: '서울 동작구 동작대로27다길 26 사당동 주상복합 B101호', category: '당구장' },
  { name: '3949 당구클럽', address: '서울 동작구 보라매로5가길 16 아카데미타워 지하1층', category: '당구장' },

  // 노래방
  { name: '락휴 코인노래연습장 서울 이수점', address: '서울 동작구 동작대로27길 16-5 2층 락휴 코인노래연습장', category: '노래방' },
  { name: '락휴 코인노래연습장 노량진점', address: '서울 동작구 노량진동 노량진로 152-1 B1', category: '노래방' },
  { name: 'K2 노래연습장 이수역점', address: '서울 동작구 동작대로27가길 12 지하1층', category: '노래방' },

  // 볼링장
  { name: '보라매 볼링장', address: '서울 동작구 보라매로5가길 16 아카데미 타워 상가건물 7층 보라매 볼링장', category: '볼링장' },
  { name: '한숲볼링센터', address: '서울 동작구 여의대방로 250 대림쇼핑타운 3층 309호', category: '볼링장' },
  { name: '성대볼링센타', address: '서울 동작구 상도로 102 성대시장 3층', category: '볼링장' },

  // 바
  { name: '오늘도 수고했어', address: '서울 동작구 동작대로7길 11 2층', category: '바' },
  { name: '제이앤제이바 이수본점', address: '서울 동작구 동작대로27다길 44 1층 제이앤제이바', category: '바' },
  { name: '돌담', address: '서울 동작구 동작대로27다길 12 2층', category: '바' },
  { name: '리버풀펍', address: '서울 동작구 흑석로 101-10 1층 리버풀펍', category: '바' },
  { name: '커먼테이블', address: '서울 동작구 사당로26길 128 2층', category: '바' },
  { name: '스팅', address: '서울 동작구 사당로 8 2층', category: '바' },
  { name: '공집합', address: '서울 동작구 성대로1길 16 1층', category: '바' },
  { name: '은밀', address: '서울 동작구 노들로2길 7 드림스퀘어복합빌딩 2층 b202호', category: '바' },
  { name: '안단테', address: '서울 동작구 노량진로26길 16-1 1층', category: '바' },
  
  // 공원
  { name: '노량진컵밥거리', address: '서울 동작구 노량진로 178', category: '먹자거리' },
  { name: '보라매공원', address: '서울 동작구 여의대방로20길 33', category: '공원' },
  { name: '용양봉저정공원', address: '서울 동작구 본동 산3-9', category: '공원' },
  { name: '사육신역사공원', address: '서울 동작구 노량진동 노량진로 191 사육신묘지공원', category: '공원' },
  { name: '상도근린공원', address: '서울 동작구 상도동 531-15', category: '공원' },
  { name: '노들나루공원', address: '서울 동작구 노량진로 247 본동시민공원', category: '공원' },
  { name: '사당만남의공원', address: '서울 동작구 사당동 1043-14', category: '공원' },
  { name: '삼일공원', address: '서울 동작구 사당로23길 93 삼일(3~1)공원', category: '공원' },
  { name: '동작반려견공원', address: '서울 동작구 노량진동 24-10', category: '공원' },
  { name: '대방공원', address: '서울 동작구 여의대방로44길 39', category: '공원' },
  { name: '현충근린공원', address: '서울 동작구 동작동 산20', category: '공원' },
  { name: '효사정공원', address: '서울 동작구 현충로 55', category: '공원' },
  { name: '까치산공원', address: '서울 동작구 사당동 산32-2', category: '공원' },

  // 박물관 및 유적
  { name: '숭실대학교 한국기독교박물관', address: '서울 동작구 상도로 369 숭실대학교', category: '박물관' },
  { name: '조선일보 뉴지엄', address: '서울 동작구 현충로 124 조선일보 뉴지엄', category: '박물관' },
  { name: '사육신묘', address: '서울 동작구 노량진1동', category: '문화유적' },
  { name: '노량진 지하배수로', address: '서울 동작구 노량진동 14-5', category: '문화유적' },
];
