<script lang="ts">
import profile from './assets/profile.jpg'
import Fa from 'svelte-fa'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

</script>

<div class="banner-content">
    <div class="banner-content-inner">
        <img class="profile-image" src={profile} alt="Aryan">
        <h1>Aryan Mediratta</h1>
        <div class="social-links">
            <a href="https://linkedin.com/in/aryan-mediratta" target="_blank">
                <i><Fa icon={faLinkedinIn} scale={2.5}/></i> 
                <!-- <div class="link-text">LinkedIn</div> -->
            </a>
            <a href="https://github.com/aryan-02" target="_blank">
                <i><Fa icon={faGithub} scale={2.5} /></i> 
                <!-- <div class="link-text">GitHub</div> -->
            </a>
            <a href="/aryanm-dev/resume.pdf">
                <i><Fa icon={faFilePdf} scale={2.5} /></i>
                <!-- <div class="link-text">Résumé</div> -->
            </a>
        </div>
    </div>
</div>

<style>
.banner-content {
	position: absolute;
	top: 50%;
	display: flex;
	text-align: center;
	color: white;
	width:100%;
	transform: translateY(-50%);
}
.banner-content-inner {
	width: 100%;
	text-align: center;
}
.banner-content-inner h1 {
	font-size: 5rem;
	font-weight: bolder;
    padding-bottom: 1rem;
}
.banner-content-inner h2 {
	font-size: 4rem;
	font-weight: bold;
}
.profile-image {
	width: 15rem;
	height: auto;
	border-radius: 50% 50%;
}

.social-links {
    display: flex;
    justify-content: center;
}
.social-links a {
    color: #aaa;
    text-decoration: none;
    padding: 2.3rem 1.9rem;
    margin: 1.5rem;
    /* border: 2px solid white; */
    border-radius: 5%;
    font-size: 1.5rem;
    transition: all 0.5s;
}

.social-links a:hover {
    transform: scale(0.9);
    color: white;
    /* background: #6e2b2b; */
    border: 2px solid white;
}
.social-links i {
    margin: auto 1rem;
}

</style>