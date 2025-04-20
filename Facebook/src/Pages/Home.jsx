import React from 'react'
import './Home.scss'
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaCirclePlus } from "react-icons/fa6";

function Home() {
    return (
        <div className="facebook-home">
            {/* navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo">
                        <img src="https://th.bing.com/th/id/OIP.B64O85qcCdcTN6ozrnJgzQHaHa?w=720&h=720&rs=1&pid=ImgDetMain" style={{height:'40px', width:'40px'}} alt="" />
                    </div>
                    <div className='nav_search' style={{height:'40px', width:'40px', borderRadius:'50%', backgroundColor:'rgba(213, 213, 213, 0.81)'}}>
                    <IoSearch className='nav_search_icon'  />
                    </div>
                  
                </div>
                <div className="navbar-center">
                    <button className="nav-icon "><GoHomeFill /></button>
                    <button className="nav-icon"><FaUserFriends /></button>
                    <button className="nav-icon"><MdGroups /></button>
                </div>
                <div className="navbar-right">
                    <button className="circle-btn"><AiOutlineMenu /> </button>
                    <button className="circle-btn"><FaFacebookMessenger /></button>
                    <button className="circle-btn"><RiNotification2Fill />
                    </button>
                    <button className="circle-btn"><CgProfile /></button>
                </div>
            </nav>
             {/* Main  */}
      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-item"> 
            <img  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
            Lulu L</div>
          <div className="sidebar-item">
            <img src="https://simplifyai.in/wp-content/uploads/2024/07/Meta-ai-logo.png" alt=""  />
            Meta AI</div>
          <div className="sidebar-item">
            <img src="https://cdn0.iconfinder.com/data/icons/social-basic-2/32/Social_Media_Basic_Social_facebook__digital__Friends_-512.png" alt="" />
            Friends</div>
          <div className="sidebar-item">
            <img src="https://th.bing.com/th/id/OIP.B64O85qcCdcTN6ozrnJgzQHaHa?w=720&h=720&rs=1&pid=ImgDetMain" alt="" />
            Welcome</div>
          <div className="sidebar-item">
            <img src="https://cdn-icons-png.flaticon.com/512/11820/11820159.png" alt="" />
            Memories</div>
          <div className="sidebar-item">
            <img src="https://cdn-icons-png.flaticon.com/512/7598/7598658.png" alt="" />
            Saved</div>
          <div className="sidebar-item">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3433897/group-icon-md.png" alt="" />
            Groups</div>
          <div className="sidebar-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4355/4355787.png" alt="" />
            Video</div>
          <div className="sidebar-item">
            <img src="https://cdn-icons-png.flaticon.com/512/8436/8436814.png" alt="" />
            Marketplace</div>
          <div className="sidebar-item">
            <img src="https://th.bing.com/th/id/OIP.B64O85qcCdcTN6ozrnJgzQHaHa?w=720&h=720&rs=1&pid=ImgDetMain" alt="" />
            Feeds</div>
          <div className="sidebar-item">
            <img src="https://www.freeiconspng.com/thumbs/calendar-image-png/calendar-image-png-27.png" alt="" />
            Events</div>
        </aside>

        {/* feed */}
        <section className="feed">
          <div className="create-post">
            <div className='create_post_1'>
            <img className='create_post_img' src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
            <input className='create-post-input' placeholder="What's on your mind, Lulu?" />
            </div>
            <div className="post-actions">
              <div className='post_menus'>
                <img src="https://static.vecteezy.com/system/resources/previews/016/017/450/non_2x/live-streaming-icon-transparent-graphics-free-png.png" alt="" /> 
                <p>Live video</p>
                </div>
              <div className='post_menus' >
                <img src="https://cdn-icons-png.flaticon.com/512/10069/10069953.png" alt="" />
                <p> Photo/video</p></div>
              <div className='post_menus'>
                <img src="https://th.bing.com/th/id/OIP.MZk9UZQ_xoJBvVTu7gh8KAHaHa?rs=1&pid=ImgDetMain" alt="" />
                <p>Feeling/activity</p> </div>
            </div>
          </div>

          <div className="create-story">  
          <FaCirclePlus style={{height:'40px', width:'40px', marginTop:'5px'}} />
          <div style={{display:'flex', flexDirection:'column'}}>
            <h4 style={{marginLeft:'10px', marginTop:'5px', marginBottom:'2px'}}>Create Story</h4>
            <p style={{marginLeft:'10px', marginTop:'0px', fontSize:'15px'}}>Share photos or write something</p>
            </div>
          </div>
{/* post */}
          <div className="post">
            <div className="post-header">
              <span className="poster-name">Acystic</span>
              <span className="post-time">15 April at 21:30</span>
            </div>
            <div className="post-content">Coffee</div>
            <div className="post-images">
                <div className='post_images_div'>
                <img src="https://th.bing.com/th/id/OIP.x-pxLtmbATf5hS2xd_ozqwHaFi?rs=1&pid=ImgDetMain" alt="" />
                </div>
            </div>
          </div>
          <div className="post">
            <div className="post-header">
              <span className="poster-name">Acystic</span>
              <span className="post-time">15 April at 21:30</span>
            </div>
            <div className="post-content">Coffee</div>
            <div className="post-images">
                <div className='post_images_div'>
                <img src="https://thumbs.dreamstime.com/b/night-city-lights-rain-evening-104200352.jpg" alt="" />
                </div>
            </div>
          </div>
        </section>

        <aside className="right-sidebar">
          <div className="group-chats">
            <h4>Group chats</h4>
            <button className="create-group-chat">+ Create group chat</button>
          </div>
        </aside>
      </div>
        </div>
    )
}

export default Home