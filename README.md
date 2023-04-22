# SemioTech
Aplicativo para UFPI


Passo a passo para instalação do React Native:
> https://reactnative.dev/docs/environment-setup?guide=quickstart&package-manager=npm

Para criar o projeto:
- npx create-expo-app namedoprojet


para instalar a pasta IOS e ANDROID:
- npx expo prebuild
> com.semiotech.app


para instalar a pasta do WEB:
- npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1


Se foi executado expo prebuilde e a pasta iOS não foi gerada, pode haver alguns motivos pelos quais isso aconteceu. Aqui estão algumas soluções possíveis:

  1- Certifique-se de ter o Xcode instalado em sua máquina, pois é necessário para criar aplicativos iOS com React Native. Você pode baixá-lo na App Store ou no      site do desenvolvedor da Apple.

  2- Tente executar (npx pod-installdentro) da ios pasta. Este comando instala as dependências do iOS usando CocoaPods. Se este comando falhar, tente executá-lo        (pod install) diretamente da iospasta.

  3- Verifique se você tem as permissões necessárias para criar arquivos e pastas no diretório atual.

  4- Se ainda estiver com problemas, tente executar (npx expo prebuild -p ios) para forçar a criação da pasta iOS.

Espero que uma dessas soluções ajude você a gerar a pasta iOS para o seu projeto.

Problemas sobre a pasta IOS:
> Parece que você está executando o npx pod-installcomando em uma máquina não Darwin. O CocoaPods, o gerenciador de dependências para projetos iOS que pod-installusa, é suportado apenas no macOS.

> Se você estiver tentando criar a versão iOS do seu aplicativo em uma máquina Windows ou Linux, precisará usar uma máquina macOS para executar o pod installcomando. Você pode usar uma máquina macOS física ou usar uma máquina virtual em sua máquina Windows ou Linux para executar o macOS.

> Como alternativa, você pode considerar o uso de um serviço como as atualizações Over-the-Air da Expo, que permite implantar atualizações em seu aplicativo sem reconstruir e enviar novos arquivos binários para as lojas de aplicativos. Isso permitiria que você fizesse alterações no JavaScript e em outros ativos em seu aplicativo sem precisar executar o pod installcomando em uma máquina macOS.






Fonts:
- https://github.com/expo/google-fonts
- https://fonts.google.com/





PS C:\Users\jefes\OneDrive\Área de Trabalho\SemioTech\projeto> npm audit fix

changed 1 package, and audited 999 packages in 13s

63 packages are looking for funding
  run `npm fund` for details

# npm audit report

json5  <1.0.2
Severity: high
Prototype Pollution in JSON5 via Parse Method - https://github.com/advisories/GHSA-9c47-m6qq-7p4h
fix available via `npm audit fix --force`
Will install expo@46.0.21, which is a breaking change
node_modules/find-babel-config/node_modules/json5
  find-babel-config  <=1.2.0
  Depends on vulnerable versions of json5
  node_modules/find-babel-config
    babel-plugin-module-resolver  2.3.0 - 4.1.0
    Depends on vulnerable versions of find-babel-config
    node_modules/babel-plugin-module-resolver
      babel-preset-expo  *
      Depends on vulnerable versions of babel-plugin-module-resolver
      node_modules/babel-preset-expo
        expo  >=14.0.0
        Depends on vulnerable versions of @expo/cli
        Depends on vulnerable versions of @expo/config
        Depends on vulnerable versions of @expo/config-plugins
        Depends on vulnerable versions of babel-preset-expo
        Depends on vulnerable versions of expo-asset
        Depends on vulnerable versions of expo-constants
        node_modules/expo

xml2js  <0.5.0
Severity: high
xml2js is vulnerable to prototype pollution  - https://github.com/advisories/GHSA-776f-qx25-q3cc
fix available via `npm audit fix --force`
Will install expo@46.0.21, which is a breaking change
node_modules/xml2js
  @expo/config-plugins  *
  Depends on vulnerable versions of xml2js
  node_modules/@expo/config-plugins
    @expo/config  >=3.3.23-alpha.0
    Depends on vulnerable versions of @expo/config-plugins
    node_modules/@expo/config
      @expo/metro-config  >=0.1.49-alpha.0
      Depends on vulnerable versions of @expo/config
      node_modules/@expo/metro-config
        @expo/dev-server  >=0.1.49-alpha.0
        Depends on vulnerable versions of @expo/metro-config
        node_modules/@expo/dev-server
      expo-constants  >=10.1.2
      Depends on vulnerable versions of @expo/config
      node_modules/expo-constants
        expo-asset  >=8.6.1
        Depends on vulnerable versions of expo-constants
        node_modules/expo-asset
    @expo/prebuild-config  *
    Depends on vulnerable versions of @expo/config
    Depends on vulnerable versions of @expo/config-plugins
    Depends on vulnerable versions of xml2js
    node_modules/@expo/prebuild-config
      @expo/cli  >=0.1.0
      Depends on vulnerable versions of @expo/config
      Depends on vulnerable versions of @expo/config-plugins
      Depends on vulnerable versions of @expo/dev-server
      Depends on vulnerable versions of @expo/metro-config
      Depends on vulnerable versions of @expo/prebuild-config
      node_modules/@expo/cli

14 high severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force
