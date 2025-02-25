const allPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const posts = data.posts
    displayPost(posts);
}
allPosts();

const displayPost = posts => {
    //console.log(posts);
    const discussTopic = document.getElementById('discuss-topics');
    posts.forEach(post => {
        //console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" lg:flex rounded-xl bg-gray-200 shadow-xl">
            <div>
            <figure class=""><img src="${post.image}" class="w-[100px] h-[100px] rounded-xl p-5" alt="Picture"/></figure>
            </div>
            <div class="card-body">
                <div class="flex gap-10">
                <h2 class=""># ${post.category}</h2>
                <h2 class="">Author : ${post.author.name}</h2>
                </div>
                <p class="font-bold">${post.title}</p>
                <p class="">${post.description}</p>
                <hr>
                <div>
                    <div class="flex gap-5 mt-6">
                    <h2 class="flex gap-3"><span><img src="images/eye.png" alt=""></span>${post.comment_count}</h2>
                    <h2 class="flex gap-3"><span><img src="images/comment.png" alt=""></span>${post.view_count}</h2>
                    <h2 class="flex gap-3"><span><img src="images/time.png" alt=""></span>${post.posted_time}</h2>
                    </div>
                    <div class="card-actions justify-end">
                        <button><img src="images/Group 40106.png" alt=""></button>
                    </div>
                </div>
            </div>
            </div>
        `
        discussTopic.appendChild(div);
    });
}

const latestPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    displayLatestPost(data);
}
latestPost();

const displayLatestPost = data => {
    console.log(data);
    const latestPostContainer = document.getElementById('latest-post-container');
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card lg:w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${element?.author?.posted_date || 'No publish date'}</h2>
              <p class="font-bold text-xl">${element.title}</p>
              <p>${element.description}</p>
              <div class="flex">
              <div>
              <figure class="px-10 pt-10">
              <img src="${element.profile_image}" class="w-[80px] h-[80] rounded-full" alt="Picture" class="rounded-xl" />
            </figure>
            </div>
            <div class="mt-12">
            <p class="font-bold text-xl">${element?.author?.name}</p>
            <p>${element?.author?.designation || 'Unknown'}</p>
            </div>
            
              </div>
            </div>
          </div>
    
        `
        latestPostContainer.appendChild(div);
        
    }
    
}