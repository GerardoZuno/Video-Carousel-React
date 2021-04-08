import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouseItem";
import useInitialState from "../hooks/useInitialState";

import "../assets/styles/app.scss";

const API = "http://localhost:3030/initialState";

const Home = () => {
  const videos = useInitialState(API);

  const renderList = (list = []) => {
    return (
      <>
        {list.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </>
    );
  };

  return (
    <div>
      
      <Search />
      {videos.myList && videos.myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>{renderList(videos.myList)}</Carousel>
        </Categories>
      )}
      {videos.trends && videos.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>{renderList(videos.trends)}</Carousel>
        </Categories>
      )}
      {videos.originals && videos.originals.length > 0 && (
        <Categories title="Originales ">
          <Carousel>{renderList(videos.originals)}</Carousel>
        </Categories>
      )}
    </div>
  );
};

export default Home;
