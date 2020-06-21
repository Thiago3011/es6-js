import axios from 'axios';

// 1

/*const delay = async () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay(console.log('1S'));
    await delay(console.log('2S'));
    await delay(console.log('3S'));
}

umPorSegundo();*/

// 2

/*
const getUserFromGithub = async (user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuario nao existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');*/

// 3

/*class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);

        } catch (err) {
            console.log('Repositório não existe');
         }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/diego3g');*/

// 4

/*const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}

buscaUsuario('diego3g');*/