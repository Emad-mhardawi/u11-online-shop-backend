const User = require('../modules/user');
const bcrypt = require('bcrypt')

exports.postSignup = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const confirmedPassword = req.body.confirmedPassword;
    let displayName = req.body.displayName;

    if (!email || !password || !confirmedPassword) {
      return res.status(400).send("not all fields have been  entred");
    }

    if (password.length < 5) {
      return res.status(400).send("please enter a longer password");
    }

    if (password != confirmedPassword) {
      return res.status(400).send("password does not match");
    }

    if (!displayName) {
      displayName = email;
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).send("this user is already exsits");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new User({
      displayName: displayName,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    return res.send("welcome " + savedUser.displayName);
  } catch (err) {
     res.status(500).json({error: err.messege});
  }
};


exports.postLogin =  async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password){
            return res.status(400).send('not all fields have been  entred');
        }

        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).send('no account with this email has been registred');
        }

        const passwordIsMatch = await bcrypt.compare(password, user.password);

        if(!passwordIsMatch){
            return res.status(400).send('you entered a wrong password');
        }

        if(passwordIsMatch){
            res.send('you loged in')
        }

    }catch(err){
        res.status(500).json({error: err.messege});
    }
}