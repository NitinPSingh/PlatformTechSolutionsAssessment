import { VideoPerc } from "../../logic/instructions"
export const ProductVideo = ({perc}) => {
 

            return <>
            {Object.entries(VideoPerc).map(([key, value]) => 
            
            <div className="xl:pl-28 lg:pl-16 pl-4" style={Math.floor(perc/20)!=key?{display:"none"}:{}}>
                
            <video  autoPlay src={value} className="rounded-lg" width="100%" height="100%" preload="muted" loop type="video/mp4" />
            </div>            
            
            )}
                    
            </>
}