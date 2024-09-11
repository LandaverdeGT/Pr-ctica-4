// Initialize express router

let users = [{
    carnet: '202200378',
    password: '1234'
}];

export const login = (req, res) => {
    const { carnet, password } = req.body;
    const user = users.find(user => user.carnet === carnet && user.password === password);
    if (carnet === '' || password === '') {
        return res.status(401).json({ message: 'Carnet and Password do not be blank' });
    }
    else if (!user) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
}   

export const search = (req, res) => {
    const { carnet } = req.body;
    const user = users.find(user => user.carnet === carnet);
    if (carnet === '') {
        return res.status(406).json({ message: 'Carnet do not be blank' });
    }
    else if (!user) {
        return res.status(100).json({ message: 'No está el usuario' });
    }
    return res.status(409).json({ message: 'User exists' });
}
