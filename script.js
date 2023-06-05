const { createApp } = Vue;

createApp({
    data(){
        return {
            images : [
                {link : 'https://holrmagazine.com/wp-content/uploads/2020/01/Next-in-Fashion-759x500.jpg'},
                {link : 'https://cdn.shopify.com/s/files/1/0767/7835/files/next_in_fashion.jpg?v=1595019494'},
                {link : 'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/6HIUGKNIBRCJ3KYK6AEIKM65TU.jpg'}

            ]
            activeIndex : 0,
        }
        
    },
})