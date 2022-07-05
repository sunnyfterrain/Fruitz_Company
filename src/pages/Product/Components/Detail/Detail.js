import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../../config';
import DetailInfo from './DetailInfo';
import DetailSelect from './DetailSelect';
import DetailBtn from './DetailBtn';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);
  const [detailTabs, setDetailTabs] = useState(0);
  const [detailProduct, setDetailProduct] = useState([]);
  const { id } = useParams();

  let findItem = detailProduct.find(item => {
    return item.id === parseInt(id);
  });

  /* 백엔드 API 연결시 사용 */
  // const { name, description, price } = detailProduct;

  // const fetchData = () => {
  //   async function fetchSetDetail() {
  //     const response = await fetch(`${BASE_URL}products/${id}`);
  //     const data = await response.json();
  //     setDetailProduct(data.product_detail);
  //   }
  //   fetchSetDetail();
  // };

  /* Mock Data 연결 시 사용 */
  const fetchData = () => {
    async function fetchSetDetail() {
      const response = await fetch('/data/detailMockData.json');
      const getData = await response.json();

      id <= 8 && setDetailProduct(getData.product_list.fruit);
      (id >= 9) & (id <= 14) && setDetailProduct(getData.product_list.beverage);
      (id >= 15) & (id <= 21) && setDetailProduct(getData.product_list.goods);
      (id >= 22) & (id <= 27) && setDetailProduct(getData.product_list.gifts);
    }
    fetchSetDetail();
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(findItem);
  return (
    <section className="detail">
      {findItem && (
        <>
          <div className="detailContent">
            <img className="img" alt="productImg" src={findItem.images[0]} />
            <p className="content">{findItem.description}</p>
          </div>
          <div className="detailAside">
            <div className="title">
              <h3 className="asideTitle">[프룯츠] {findItem.name}</h3>
              <h3 className="asidePrice">KRW {findItem.price}</h3>
            </div>
            <ul className="asideTabs">
              {TAB_LIST.map((tabsTitle, idx) => {
                return (
                  <li
                    className={detailTabs === idx ? 'tabsActive' : ''}
                    key={idx}
                    onClick={() => {
                      setDetailTabs(idx);
                    }}
                  >
                    {tabsTitle}
                  </li>
                );
              })}
            </ul>
            {detailTabs === 0 && <DetailInfo {...findItem} />}
            <div className="purchase">
              <DetailSelect count={count} setCount={setCount} />
              <DetailBtn count={count} {...findItem} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Detail;

const TAB_LIST = ['DETAILS', '|', 'HOW TO USE'];
