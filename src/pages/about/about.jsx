import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="container">
        {/* Tiêu đề lớn */}
        <h1 className="about-title">Về chúng tôi</h1>

        <div className="about-layout">
          {/* Sidebar Icon bên trái */}
          <aside className="about-sidebar">
            <div className="side-item active">
              <i className="icon-restaurant"></i>
              <span>Nhà hàng</span>
            </div>
            <div className="side-item">
              <i className="icon-farm"></i>
              <span>Farm</span>
            </div>
            <div className="side-item">
              <i className="icon-food"></i>
              <span>ẨM THỰC</span>
            </div>
            <div className="side-item">
              <i className="icon-art"></i>
              <span>NGHỆ THUẬT</span>
            </div>
          </aside>

          {/* Nội dung văn bản ở giữa */}
          <article className="about-text">
            <p>
              MUFA là một nhà hàng <strong>farm-to-table về nấm tươi đầu tiên của Việt Nam</strong>, nơi ẩm thực được xây dựng từ mỗi quan hệ trực tiếp với tự nhiên.
            </p>
            <p>
              Chúng tôi lựa chọn nấm làm trung tâm, không chỉ như một nguyên liệu, mà như một cách tiếp cận: phát triển tự nhiên, thích nghi với môi trường, và giữ trọn hương vị nguyên bản.
            </p>
            <p>
              Từ đó, triết lý ẩm thực được hình thành: tôn trọng nguyên liệu, kết hợp những điều quen thuộc một cách sáng tạo và tiết chế, để hương vị tự dẫn dắt trải nghiệm.
            </p>
            <p>
              Mỗi món ăn là một phần của hành trình, nơi bạn cảm nhận rõ hơn về nguyên liệu, về mùa, và về sự kết nối tự nhiên giữa chúng.
            </p>
            <p>
              Làm việc cùng nguyên liệu địa phương, MUFA giữ lại tinh thần và ký ức vùng miền, đồng thời đặt chúng trong một góc nhìn mới, vừa thân thuộc nhưng vẫn mang sự khác biệt và độc đáo.
            </p>
          </article>

          {/* Cụm hình ảnh bên phải */}
          <section className="about-images">
            <div className="img-column">
              <div className="img-item tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80')" }}></div>
              <div className="img-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80')" }}></div>
            </div>
            <div className="img-column">
              <div className="img-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80')" }}></div>
              <div className="img-item tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592394933325-10eb7c944968?auto=format&fit=crop&w=600&q=80')" }}></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;