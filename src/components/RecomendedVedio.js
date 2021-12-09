import React from "react";
import "./RecomendedVedio.css";
import VideoCard from "./VideoCard";

function RecomendedVedio() {
  return (
    <div className="RecomendedVedio">
      <h2>Recomended</h2>
      <div className="RecomendedVedio-videos">
        <VideoCard
          title="Learn Data Science in Easy and fast Way"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://i.ytimg.com/vi/TjntDQqKQGg/maxresdefault.jpg"
          channel="Anand Choubey"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8xWoijng_nYgp_8aoD1rlmj8GbO4MSk8Tg&usqp=CAU"
        />

        <VideoCard
          title="Masterclass javascript Tutorial"
          views="1M views"
          timestamp="1 Week Ago"
          channelImage="https://assets-global.website-files.com/617262a8373080c01d2dfc2c/6176a7040d06abc319c0941c_1%20image.png"
          channel="Travas Mike"
          image="https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/free-bootcamp-image-updated.png"
        />
        <VideoCard
          title="Xman"
          views="1M views"
          timestamp="10 days Ago"
          channelImage="https://www.looper.com/img/gallery/this-is-the-right-order-to-watch-every-x-men-movie/l-intro-1618465714.jpg"
          channel="Movies Hub"
          image="https://www.thisisbarry.com/wp-content/uploads/XMen/x-men-days-of-future-past.jpg"
        />

        <VideoCard
          title="Elections In UP 2022"
          views="225689 views"
          timestamp="5 days Ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/a/ab/AT-New-Logo-800x600.png"
          channel="AajTak"
          image="https://i.ytimg.com/vi/Cy_6-_XUW-c/maxresdefault.jpg"
        />

        <VideoCard
          title="Learn NodeJs in One video"
          views="1.5M views"
          timestamp="5 Month Ago"
          channelImage="https://i.ytimg.com/vi/_l87vauA8Mk/maxresdefault.jpg"
          channel="Telusko"
          image="https://i.ytimg.com/vi/yEHCfRWz-EI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQdGU8Wq0wYnEnM-8HGY22ROha5Q"
        />

        <VideoCard
          title="Elections In UP 2022"
          views="225689 views"
          timestamp="5 days Ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/a/ab/AT-New-Logo-800x600.png"
          channel="AajTak"
          image="https://i.ytimg.com/vi/Cy_6-_XUW-c/maxresdefault.jpg"
        />

        <VideoCard
          title="Learn NodeJs in One video"
          views="1.5M views"
          timestamp="5 Month Ago"
          channelImage="https://i.ytimg.com/vi/_l87vauA8Mk/maxresdefault.jpg"
          channel="Telusko"
          image="https://i.ytimg.com/vi/yEHCfRWz-EI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQdGU8Wq0wYnEnM-8HGY22ROha5Q"
        />

        <VideoCard
          title="Elections In UP 2022"
          views="225689 views"
          timestamp="5 days Ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/a/ab/AT-New-Logo-800x600.png"
          channel="AajTak"
          image="https://i.ytimg.com/vi/Cy_6-_XUW-c/maxresdefault.jpg"
        />

        <VideoCard
          title="Learn NodeJs in One video"
          views="1.5M views"
          timestamp="5 Month Ago"
          channelImage="https://i.ytimg.com/vi/_l87vauA8Mk/maxresdefault.jpg"
          channel="Telusko"
          image="https://i.ytimg.com/vi/yEHCfRWz-EI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQdGU8Wq0wYnEnM-8HGY22ROha5Q"
        />
      </div>
    </div>
  );
}

export default RecomendedVedio;
