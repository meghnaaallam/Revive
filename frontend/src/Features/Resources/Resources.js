//importing react and styles
import React from 'react';
import '../Resources/Resources.scss';

//creating functional component for resources
const Resources = () => {
  return (
    <div id="resources" className="page">
        <div className="resources-card">
            <div className="resource-card-header">
                <h3>RESOURCES</h3>
            </div>
            <div className="resource-options">  
              <div className='grid-container'>
                {/* linking some video references */}
                  <div className='grid'> 
                  {/* icon of youtube */}
                    <img className='img' src='https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png' height={80} width={80}></img>
                    <h3 className='res-title'>Videos</h3> 
                    <a target="_blank" href="https://www.youtube.com/watch?v=tEmt1Znux58"><button className="resource-buttons" id="soft-btn">Breathing Relaxation</button></a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=7AkbUfZjS5k"><button className="resource-buttons" id="nature">Virtual Nature</button></a>
                  </div>

                  {/* linking some podcasts references */}
                  <div className='grid'> 
                  {/* icon of spotify */}
                  <img className='img' src='https://www.citypng.com/public/uploads/small/11661570388xlqve2emckykh8duxvsgpvh7twc500yxmhrxeqceos5tlsy69cafnjapavvuls7qozpoi4rz8u97zecjlqnva0yy38a7xxuxbu2r.png' height={40} width={40}></img>
                    <h3 className='res-title'>Podcasts</h3>
                    <a target="_blank" href="https://open.spotify.com/show/3bDIT3GVMOB7hTJJfdH0kO"><button className="resource-buttons" id="">Dear Therapists</button></a>
                    <a target="_blank" href="https://open.spotify.com/show/4YXBHlLzuoESo0FKF5ufLy"><button className="resource-buttons" id="">GriefCast</button></a>
                  </div>

                {/* linking fun activity (similar to canvas) */}
                  <div className='grid'> 
                  <img className='img' src='https://cdn-icons-png.flaticon.com/512/98/98755.png?w=360' height={40} width={40}></img>
                    <h3 className='res-title'>Activities</h3>
                {/* link to meditation website */}
                    <a target="_blank" href="http://weavesilk.com/"><button className="resource-buttons" id="silk-btn">Weave Silk</button></a>
                  </div>

                {/* link to meditation website */}
                  <div className='grid'> 
                  <img className='img' src='https://cdn-icons-png.flaticon.com/512/157/157785.png' height={40} width={40}></img>
                    <h3 className='res-title'>Relaxing</h3>
                  {/* link to the pixel website */}
                    <a target="_blank" href="http://www.pixelthoughts.co/#"><button className="resource-buttons" id="pixel-btn">Pixel Thoughts</button></a>
                </div>
              </div>      
            </div>
        </div>
    </div>
  )
}

export default Resources