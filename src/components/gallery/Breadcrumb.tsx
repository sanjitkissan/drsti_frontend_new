import { BreadcrumbImg } from '@/src/assets/blog';
import { BannerImg, galleryBanner1, galleryBanner2 } from '@/src/assets/gallery';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
const newBreadcrumbArr=[
    {
        id:1,
        img: galleryBanner1
    },
    {
        id:2,
        img: galleryBanner2
    },
]
export default function Breadcrumb(){
    return(
        <section className="w-full bg-center bg-cover bg-no-repeat h-auto overflow-hidden">
            <Slider {...settings}>
            {newBreadcrumbArr.map((item:any) => ( 
                   <section
                   className="w-full h-full bg-no-repeat bg-cover bg-center "
                   // style={{ backgroundImage: `url(${item?.img.src})` }}
                   key={item.id}
                 >
                    <img src={item.img.src} alt="" className="w-full h-[80vh] object-cover"/>
                 </section>
             ))}
            
            </Slider>
                <div className="w-full h-full main-container flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-full h-full flex flex-col items-start justify-center gap-6">
                        {/* <span className="w-full flex items-center justify-start gap-4">
                            <span className="p-4 rounded-full border border-white hover:bg-red-600">
                                <PlayArrowIcon className="!text-white"/>
                            </span>
                        </span> */}
                        {/* <p className="text-white lg:text-lg uppercase tracking-wider ">Engage Modern Professionals</p> */}
                        {/* <span>
                        <h1 className="text-2xl lg:text-4xl  font-bold tracking-wide capitalize">High dwell, High-Frequency </h1>
                        <h1 className="font-bold text-2xl lg:text-4xl  tracking-wide capitalize">Captive Environments.</h1>
                        </span> */}
                        {/* <button className="px-10 py-4 border border-gray-300 text-white font-bold uppercase hover:bg-red-600">Learn More</button> */}
                    </div>
                    <div className="w-full"></div>
                </div>
        </section>
    )
}