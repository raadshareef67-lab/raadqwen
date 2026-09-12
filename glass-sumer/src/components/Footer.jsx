const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GLASS SUMMER</h3>
          <p>متجرك المتخصص للنظارات الشمسية العصرية والمميزة</p>
        </div>
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <a href="/men">رجال</a>
          <a href="/women">نساء</a>
          <a href="/boys">أولاد</a>
          <a href="/girls">بنات</a>
        </div>
        <div className="footer-section">
          <h3>خدمة العملاء</h3>
          <a href="#">اتصل بنا</a>
          <a href="#">الأسئلة الشائعة</a>
          <a href="#">سياسة الإرجاع</a>
          <a href="#">الشحن والتوصيل</a>
        </div>
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p>info@glasssumer.com</p>
          <p>+966 50 000 0000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GLASS SUMMER. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
