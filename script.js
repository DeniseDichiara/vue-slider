const { createApp } = Vue;

createApp({
    data(){
        return{
            images:[
                'https://akns-images.eonline.com/eol_images/Entire_Site/2023025/rs_1200x1200-230125151521-1200-gigi-hadid-tan-france-next-fashion-netflix2.ct.jpg?fit=around%7C1080:540&output-quality=90&crop=1080:540;center,top',
                'https://hips.hearstapps.com/hmg-prod/images/nif-tw-gigi-20hadid-tan-20france-setup01-17290-bw-r1-640221c526be4.jpg?crop=0.75xw:1xh;center,top&resize=1200:*',
                'https://holrmagazine.com/wp-content/uploads/2020/01/Next-in-Fashion-759x500.jpg',
                'https://cdn.sortiraparis.com/images/80/83043/851535-gigi-hadid-co-presentera-la-saison-2-du-concours-de-mode-next-in-fashion-sur-netflix.jpg" alt="next in fashion'
            ],
            activeIndex : 0,

        }
        
    }
})