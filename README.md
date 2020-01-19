# Developer Finder (DevsRadar)!
## A web and mobile application made with ReactJS, React Native and Node.js in the Omnistack #10.

### Prerequisites 📋
To build the  application I needed, [Mongodb](http://cloud.mongodbcom), [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com) but to this project I used [yarn](https://yarnpkg.com/lang/en/)) installed on the computer.

To install Node.js and Yarn I used the packedge manager [Homebrew](http://brew.sh).

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
brew install node@12
```

```
brew install yarn --ignore-dependencies
```

### backend folder

```
yarn init -y

yarn add express

yarn add nodemon -D

yarn add mongoose

yarn add axios

yarn add cors
```

### frontend folder

```
yarn create react-app <foldername>

yarn start

yarn add axios
```

### mobile folder

```
yarn global add expo-cli
```

Inside .zshrc
```
code .zshrc
```
```
export PATH="$(yarn global bin):$PATH"
```
```
expo init mobile

yarn start
```

With a smartphone, using the Expo app, just need to scan the code.

```
yarn add react-navigation

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context

yarn add react-navigation-stack

@react-native-community/masked-view

expo install react-native-maps

expo install expo-location

expo install react-native-webview

yarn add axios
```

in progress...