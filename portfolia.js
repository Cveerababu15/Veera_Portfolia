 const sidemenu = document.getElementById("sidemenu");
const navbar= document.querySelector("nav");
const navlinks= document.querySelector("nav ul");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-16rem";
        }
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
                navlinks.classList.remove('bg-white','shadow-sm','big-opacity-50','dark:border','dark:border-white/50',"dark:bg-transparent")
            }
            else {
                navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20')
                navlinks.classList.add('bg-white','shadow-sm','big-opacity-50','dark:border','dark:border-white/50',"dark:bg-transparent");
            }


        })
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
        }
        

    