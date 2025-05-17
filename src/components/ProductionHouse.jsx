import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productions = [
    { id: 1, video: disneyV, img: disney },
    { id: 2, video: pixarV, img: pixar },
    { id: 3, video: marvelV, img: marvel },
    { id: 4, video: starwarV, img: starwar },
    { id: 5, video: nationalGeographicV, img: nationalG },
  ];
  return (
    <div className=' h-[200px]  flex items-center gap-10 p-5'>
      {productions.map((items) => {
        return (
          <div className='relative border-1 rounded-2xl'>
            <img src={items.img} alt='logo image' className='absolute ' />
            <video
              src={items.video}
              autoPlay
              loop
              muted
              className='opacity-0 border-1 rounded-2xl hover:opacity-[0.9]'
            />
          </div>
        );
      })}
    </div>
  );
  s;
}

export default ProductionHouse;
