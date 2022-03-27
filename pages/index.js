import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<body class="dark-mode">
    <!-- Offline screen -->
    <div class="hide" style="width:100vw; height:100vh">
      <h1>Internetiühendus puudub <br><br> </h1>
      <p>1. Veendu, et internetiühendus oleks olemas.<br> </p>
      <p>2. Vaata, kas server töötab -> <a href="https://stats.uptimerobot.com/Rn9oKuGKkv"> uptimerobot.com</a><br></p>
    </div>
    <section class="ekool-login hide screenClass" id="ekool-login-id">
      
      <img id="home-icon-ekool-id" class="home-icon home-btn" src="images/home.png" >
      <img src="images/ekool.png" class="ekool-logo-login hide" id="ekool-logo-login">
      
      <div class="ekool-input-divider">
        <div class="ekool-input-divider-header">Ühenda Ekooliga</div>
        <input autocomplete="off" class="ekool-input" placeholder="Email" type="text" name="" id="eKoolEmail">
        <input autocomplete="off" class="ekool-input" placeholder="Ekooli salasõna" type="password" name="" id="eKoolPassword">
        <button id="logInEkool">Ühenda</button>
      </div>

          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        
    </section>


    <section class="main-screen screenClass" id="main-screen-id">
      
          <div class="home-screen" id="home-screen-id">
  
            <div class="header-hue">
              <div class="header-header">
                <div class="change-class blinking" id="change-class">
                  Vali klass
                </div>
             
                <!--SideMenu-->
             <div class="menu1 cross menu--1" >
                  <label class="MenuLabel">
                    <input class="menu1Check" type="checkbox" id="MenuHamburger">
                    <svg viewBox="0 10 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                      <path class="line--2" d="M0 50h70" />
                      <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                    </svg>
                  </label>
                </div>
                <div class="hide" id="menuArea">
                
                  <input class="input" type="checkbox" id="menuToggle"></input>
                
                <label for="menuToggle" class="menuOpen">
                  <div class="open"></div>
                </label>
    
                
                
                <div class="menu menuEffects">
                  <label for="menuToggle"></label>
                  <div class="menuContent">
                    <ul>
                      <li><a href="#" id="profile-screen-button-id">Profiil</a></li>
                      <li><a href="#">MENU 2</a></li>
                      <li><a href="#">MENU 3</a></li>
                      <li><a href="#">MENU 4</a></li>
                    </ul>
                  </div>
                </div>
                </div>
              </div> 
  <!--SideMenu-->
  
            
              <p1 class="next-lesson-p-class" id="next-lesson-p-id"></p1>
              <p1 class="next-lesson-classroom-p-class" id="next-lesson-classroom-p-id"></p1>
              <p1 class="next-lesson-duration-p-class" id="next-lesson-duration-p-id"></p1>
              
            </div>
            
  
          </div>
        <div id="st-container" class="st-container">
          <nav class="st-menu st-effect-1">
            <h1>E-Viiking</h1>
           
              <div class="sideNavElement" id="sidenav-logisisse">
                <img src="images/log-in.svg">
                Logi sisse
              </div>
              <div class="sideNavElement" id="sidenav-andmed">
                <img src="images/user.svg">
                Andmed
              </div>
              <div class="sideNavElement" id="sidenav-premium">
                <img src="images/cloud.svg">
                Premium
              </div>
              <div class="sideNavElement" id="sidenav-seaded">
                <img src="images/settings.svg">
               Seaded
              </div>
              <div class="sideNavElement" id="sidenav-tagasiside">
                <img src="images/send.svg">
                Tagasiside
              </div>
              <div class="sideNavElement" id="sidenav-kkk">
                <img src="images/help-circle.svg">
                KKK
              </div>
          </nav>
        </div>
        <div class="day-today" id="day-today-id">
          <p1 class="today-text" id="today-text-id">
          Esmaspäev</p1>
          </div> 

      
          <!--         <div id='progressbar1'></div> -->
        <div class="main-screen-div-centering">
          <div class="timetable-today" id="timetable-today-id">
              
          </div>

          <div class="main-screen-div-right hide" id="main-screen-div-right-id">
              
          </div>
        </div>
      
    </section>
    <section class="overlayScreen screenClass hide" id="overlayScreen" >
      <div class="overlayBoxWrapper" id="overlayBoxWrapper">
        <div class="ol-info" id="olNum"></div>
        <div class="ol-info" id="olLesson">
          <p>text</p>
          <img class="downArrow" src="images/downArrow.svg"></i>
          <div class="hide" id="optionsDropdown">PHolder1<br>PHolder2</div>
        </div>
        <div class="ol-info" id="olClass">Loading...</div>
        <div class="ol-info" id="olTeacher"></div>
        <div class="ol-info" id="olTimes"></div>
      </div>
    </section>

      <section class="profile-screen screenClass hide" id="profile-screen-id">
        
        <div class="background-hue-class" id="background-hue">
          <img src="images/home.png" class="home-icon home-btn" id="home-icon-id">

          <img src="images/user.png" class="pfp-class" id="pfp-id">
          <p1 class="pfp-name" id="pfp-name-id">username</p1>
          
        </div>



<!--         <div class="profile-settings" id="profile-settings-id">
        <div class="option-icon" id="option1-icon"><img src="images/user-icon.png" class="usericon-class"><p1 class="profile-option" id="option-1">Profiil</p1></div>
        <div class="option-icon" id="option2-icon"><img src="images/notification.png" class="notif-class"><p1 class="profile-option" id="option-2">Teated</p1></div>
          <p1 class="profile-option" id="option-3">Option</p1>
          <p1 class="profile-option" id="option-4">Option</p1>
          <p1 class="profile-option" id="option-5">Option</p1>
        </div> -->

          <div class="profile-settings">
            <div class="squarediv">
              <div class="squareoption" id="squareoption1-id"></div>
              <div class="squareoption" id="squareoption2-id"></div>
            </div>
    
            <div class="squarediv">
              <div class="squareoption" id="squareoption3-id"></div>
              <div class="squareoption" id="squareoption4-id" onclick="highlightButton()">
                <img src="images/flashlight.png" class="flashlight-pfp" id="flashlight-pfp-id">
              </div>
            </div>

  <div class="log-out-btn" id="log-out-div-id">Logi välja</div>
          </div>


        
      </section>
            
      <section class="login-screen hide" id="login-screen-id">


        
        <div class="login-background" id="login-background-id">
          <img src="images/viking-logo-Transparent.png" class="viiking-logo-login" id="viking-logo-login">
          <div class="login-divider" id="login-divider-id">
            <input autocomplete="username" type="email" class="login-input" id="login-input-email" placeholder="Email"/>
            <input autocomplete="current-password" type="password" class="login-input" id="login-input-pass"placeholder="Password" />
            <div class="loginButtonsWrapper">
              <button type="button" class="login-button" id="login-button-id">Logi sisse</button>  
              <button type="button" class="signup-button" id="signup-button-id">Registreeru</button>
            </div>
        </div>
          
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
      </section>

      <section class="loading-screen screenClass hide" id="loading-screen-id">
        
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>


        </div>

        
      </section>     

      <section class="timetable screenClass hide" >
        
      <div class="background-hue-class-timetable" id="background-hue-timetable">
        <img id="home-icon-timetable-id" class="home-icon home-btn" src="images/home.png" >
      </div>
        <div class="ttcenter">
          <var class="rows-Wrapper" id="rowsWrapper">
            <var class="column-Wrapper column-Times"></var>
          </var>
        </div>
     </section> 
      <section class="timetable screenClass hide" id="timetable-id">
        <div class="header-timetable-div">
          <div class="backBtn" id="timetableBackBtn">Tagasi</div>
        </div>
       <div class="iframeWrapper">
    
        <iframe id="timetableiframe"  loading="lazy"
           class="lazy-image" data-src= "https://tyhg.edu.ee/tunniplaan/index_12A.htm" frameborder="0">               </iframe>
         <div class="zoomBtnsWrapper">
          <div class="zoomBtn" id="zoomIn"><img src="images/zoom-in.svg"></div>
          <div class="zoomBtn" id="zoomOut"><img src="images/zoom-out.svg"></div>          
        </div>
      </div>   
     </section>  
      
      <section class="optionsScreen screenClass hide" id="optionsScreenId">
        <div class="optionsWrapper" id="optionsWrapperId">
          <div class="optionsNextBtn" id="optionsNextBtnId">Jätka</div>
        </div>
        
      </section>
    
    <section class="ekoolFeedScreen hide screenClass" id="ekoolFeedScreen">
      <div class="feedHeader" id="feedHeader">
        <img alt="home button" id="home-icon-ekool-id" class="home-icon-ekool home-btn" src="images/home.png" >
        <div class="feedHeaderUserName" id="feedHeaderUserName">loading...</div>
        <img alt="refresh" id="feedHeaderRefreshBtn" class="feedHeaderRefreshBtn" src="images/refresh-cw.svg" >
        
      </div>
      <div class="feedWrapper" id="feedWrapper">
        <div class="feedItemWrapper">
          <div class="feedItemGrade"></div>
          <div class="feedItemInfoWrapper">
            <div class="feedItemLessonName"></div>
            <div class="feedItemDescription"></div>
            <div class="feedItemTeacher"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="foodScreen screenClass hide" id="foodScreen">
      
       <div class="backBtn" id="foodBackBtn">Tagasi</div>
      <div class="iframeWrapper">
        
        <iframe id="foodiframe"   class="lazy-image" data-src= "https://view.officeapps.live.com/op/embed.aspx?src=https://www.tyhg.edu.ee/wp/wp-content/uploads/2022/03/28.03-01.04-Koolilouna-menuu.docx" frameborder="0"></iframe>

      </div>

    </section>
    <section class="tasksScreen hide screenClass " id="tasksScreen">
      <div class="allTasksWrapper" id="allTasksWrapper">
       <!--  <div class="dayWrapper hide">
          <div class="dayHeader">Homsed ülesanded <span>E 21.veebruar</span></div>
          <div class="taskWrapper">
            <div class="taskHeader">Ulesanded 21 vihikust</div>
            <div class="taskContent">opi selgeks</div>
            <div class="taskInfo">bioloogia, kodutöö</div>
       
          </div>        -->
        
        
        </div>
      </div>
    </section>
    <section class="gradesScreen screenClass hide" id="gradesScreen">
      <h1>Coming Soon..</h1>
    </section>
    <div class="inlinediv hide" id="inlinediv"> 
      <img src="images/schedule.png" class="main-squareoption"
        id="mainoption1-id" alt="tunniplaan"></img>
      <img src="images/menu.png" class="main-squareoption" 
        id="mainoption2-id" alt="toidud"></img>
      <img src="images/ekool.png" class="main-squareoption" 
        id="mainoption3-id" alt="ekool"></img>
      <img src="images/list.png" class="main-squareoption" 
        id="mainoption5-id" alt="ekool hinded"></img>
      <img src="images/grade.png" class="main-squareoption"
        id="mainoption4-id" alt="ekool hinded 2"></img>
    </div>

   <!--  <script src="serviceWorker.js"></script> -->
    <script src="cookies.js"></script>
    <script src="helperScripts.js"></script>
    <script src="createElem.js"></script>
    <script src="iosBS.js"></script>
    <script src="script.js"></script>
    <script src="lesson.js"></script> 
    <script src="themeSwitcher.js"></script>
    <script src="notifications.js"></script>
    
 
    
  </body>

      <Footer />
    </div>
  )
}
