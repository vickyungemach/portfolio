const scrollSpy = () => {


    const home = document.getElementById('home');
    let homePosition = home.getBoundingClientRect();

    const projects = document.getElementById('projects');
    let projectsPosition = projects.getBoundingClientRect();

    const resume = document.getElementById('resume');
    let resumePosition = resume.getBoundingClientRect();

    const contact = document.getElementById('contact');
    let contactPosition = contact.getBoundingClientRect();



    const main = document.getElementById('main');

    main.addEventListener('scroll', function (e) {

        // home
        if (e.target.scrollTop <= home.scrollHeight - 20) {
            document.getElementById('home-nav').classList.add('active');
            document.getElementById('projects-nav').classList.remove('active');
            document.getElementById('resume-nav').classList.remove('active');
            document.getElementById('contact-nav').classList.remove('active');

            // projects
        } else if (e.target.scrollTop <  projects.scrollHeight + home.scrollHeight) {
            document.getElementById('home-nav').classList.remove('active');
            document.getElementById('projects-nav').classList.add('active');
            document.getElementById('resume-nav').classList.remove('active');
            document.getElementById('contact-nav').classList.remove('active');

            // resume
        } else if (e.target.scrollTop < resume.scrollHeight + home.scrollHeight + projects.scrollHeight -500 ) {
            document.getElementById('home-nav').classList.remove('active');
            document.getElementById('projects-nav').classList.remove('active');
            document.getElementById('resume-nav').classList.add('active');
            document.getElementById('contact-nav').classList.remove('active');

        } else {
            document.getElementById('home-nav').classList.remove('active');
            document.getElementById('projects-nav').classList.remove('active');
            document.getElementById('resume-nav').classList.remove('active');
            document.getElementById('contact-nav').classList.add('active');
        }
    });



}

export default scrollSpy;