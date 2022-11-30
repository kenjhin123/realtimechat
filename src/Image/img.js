
import img1 from '../Image/img1.jpg'
import img2 from '../Image/img2.jpg'
import img3 from '../Image/img3.jpg'
import img4 from '../Image/img4.jpg'
import img5 from '../Image/img5.jpg'



const imgList = [img1,img2,img3,img4,img5]
const imgBG = Math.floor(Math.random() * imgList.length)

export default imgList[imgBG]