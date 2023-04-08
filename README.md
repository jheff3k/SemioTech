# SemioTech
Aplicativo para UFPI

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
