const API_URL = 'http://localhost:5173/usuarionovo'; // Substitua pela URL correta da sua API

const UsuarioService = {

    getById: async (id) => {
        return new Promise((resolve) => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuario = usuarios.find(u => u.id === parseInt(id));
            if (usuario) {
                resolve({ data: usuario });
            } else {
                throw new Error("Usuário não encontrado");
            }
        });
    },


    createUsuario: async (novoUsuario) => {
        return new Promise((resolve) => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            novoUsuario.id = usuarios.length + 1; // Gerar um ID simples
            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            resolve({ data: novoUsuario });
        });
    },
    getAllUsuarios: async () => {
        return new Promise((resolve) => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            resolve({ data: usuarios });
        });
    },
    editUsuario: async (id, updatedUsuario) => {
        return new Promise((resolve) => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const index = usuarios.findIndex(usuario => usuario.id === id);
            if (index !== -1) {
                usuarios[index] = { ...usuarios[index], ...updatedUsuario };
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                resolve({ data: usuarios[index] });
            } else {
                throw new Error("Usuário não encontrado");
            }
        });
    },
    deleteUsuario: async (id) => {
        return new Promise((resolve) => {
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios = usuarios.filter(usuario => usuario.id !== id);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            resolve({ data: usuarios });
        });
    }


    
};

export default UsuarioService;
