const linksSocialMedia = {
  github: 'Tommattih',
  linkedin: '/in/tommattih/',
  facebook: '/mateus.lins.37266',
  instagram: '/tommattihtom'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //variável criada só para armazenar o conteúdo dos atributos de classe de cada <li> a cada rodada do for()
    li.children[0].href = `https://${social}.com${linksSocialMedia[social]}`
    //modifica o conteúdo do item/filho de posição 1 = [0] através de uma template strinf `${}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
