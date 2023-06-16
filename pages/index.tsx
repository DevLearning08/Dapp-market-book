import React from 'react';


import Product from '../components/Product';
import Footer from '../components/Footer';


const Home = () => {
  const books = [
    {
      id: '1',
      img: `/img/books/2fd18c56eae16cff23bcceb119ea40af.jpg`,
      bookName: 'Triết lý sống của tôi.',
      author: 'Trương Yến',
      status: 'On sale',
      coinPrice: 100,
    },
    {
      id: '2',
      img: `/img/books/7f3f50744eb1479d1967504f9e63c32e.jpg`,
      bookName: 'Quá Trình Hình Thành Một Nhà Tư Bản Mỹ.',
      author: 'Roger Lowenstein',
      status: 'On sale',
      coinPrice: 100,
    },
    {
      id: '3',
      img: `/img/books/32caae938576f2a6bd1cbe46472e6398.jpg`,
      bookName: 'Bill Gates: Tham Vọng Lớn Lao Và Quá Trình Hình Thành Đế Chế Microsoft.',
      author: 'James Wallace, Jim Erickson',
      status: 'On sale',
      coinPrice: 100,
    },
    {
      id: '4',
      img: `/img/books/061f90449291779af003b7e0c355836a.jpg`,
      bookName: 'Lý Gia Thành - Ông Chủ của Những Ông Chủ trong Giới Kinh Doanh Hồng Kông.',
      author: 'Anthony B. Chan',
      status: 'On sale',
      coinPrice: 100,
    },
    {
      id: '5',
      img: `/img/books/64f726e03d8c3bd252375ad93e568c88.jpg`,
      bookName: 'Bộ ba xuất chúng hàn quốc.',
      author: 'Jung Hyuk June',
      status: 'On sale',
      coinPrice: 100,
    },
    {
      id: '6',
      img: `/img/books/0413827095c3811cd003d8b66361c344.jpg`,
      bookName: 'Tỷ phú bán giày.',
      author: 'TONY Hsieh',
      status: 'On sale',
      coinPrice: 100,
    }
  ];

  return (
    <>
      <div className="home-container">
        <h2 className="section-title">Introduce</h2>
        <h3 className="introduce-content">
          Welcome to Read to Earn! Our platform offers a unique opportunity to earn rewards while staying updated and expanding your knowledge. Discover a wide range of engaging articles, written by industry experts, covering topics from technology to lifestyle. With a user-friendly interface, you can easily navigate and enjoy a seamless reading experience. Accumulate reward points by interacting with articles and redeem them for exciting benefits like gift Products and exclusive offers. Join us today to unlock a world of knowledge and earn rewards along the way. Happy reading with Read to Earn!
        </h3>

        <h2 className="section-title">Thông tin marketplace hot</h2>
        
        <Product books={books} />
        
        
        
        <Footer />
      </div>
    </>
  );
};

export default Home;