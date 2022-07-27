import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView,Image,ScrollView } from 'react-native';
import { EnesAbiSelamlıyor, YASIM } from './src/Components';
import Svg, { SvgProps, Path } from "react-native-svg"

export default function App() {
  const [sayi,setSayi] = useState(5)
  const [BizimFontSizemiz,setBizimFontSizemiz] = useState(12)
  const array = [{
   "name":"Talha",
   "userName":"2ez4salt", 
   "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
   "text":"On Numara",
    "likeCount":99
  },
  {
    "name":"Mustafa",
    "userName":"mustafaaaa", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },
   ,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   },,{
    "name":"Talha",
    "userName":"2ez4salt", 
    "imageUrl":"https://media-exp1.licdn.com/dms/image/C4D03AQGDs9I-nN4JTA/profile-displayphoto-shrink_200_200/0/1653914302060?e=1660780800&v=beta&t=d5CWfeDvWj1YjFmaDN3G76i6hROenITjzh9yEIvRJfw", 
    "text":"On Numara",
     "likeCount":99
   }]
  useEffect(() => {
    setBizimFontSizemiz(BizimFontSizemiz + 12)
  },[sayi])
   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          array.map((a,key) => {
            return(
<TwitterPost key={key} name={a.name} userName={a.userName} imageUrl={a.imageUrl} text={a.text} likeCount={a.likeCount}/>
            )
            
          })
        }
        </ScrollView>
    </SafeAreaView>
  );
}

function TwitterPost({name,userName,imageUrl,text,likeCount}) {
  const [like,setLike] =useState(likeCount)
  const [state,setState] =useState(false)
  return(
    <View style={{paddingHorizontal: 24,flexDirection:"row",justifyContent:"center", alignItems:"center",marginBottom:12}}>
      <View style={{flex:1,marginRight: 24}}>
      <Image
        style={{width:55, height: 55,borderRadius: 55}}
        source={{
          uri: imageUrl,
        }}
      />
      </View>
      <View style={styles.contentSection}>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontWeight:"bold"}}>
          {name}  {' '}
          </Text>
          <Text style={{color: "grey"}}>
          {userName} ·3h
          </Text>
        </View>
        <View>
          <Text>
            {text}
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between", marginTop: 10}}>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
            <SvgComponent/>
            <Text style={{marginLeft: 10}}>
            {likeCount}
            </Text>
            </View>
            <TouchableOpacity onPress={()=> {
              setState(true)
              setLike(like+1)
              if(state){
                setLike(likeCount)
                setState(false)

              } else {
                setLike(like+1)
              } 
            }} style={{flexDirection:"row",justifyContent:"center"}}>
            <SvgComponent/>
            <Text style={{marginLeft: 10}}>
            {like}
            </Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
            <SvgComponent/>
            <Text style={{marginLeft: 10}}>
            {likeCount}

            </Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
            <SvgComponent/>
            <Text style={{marginLeft: 10}}>
            {likeCount}
            </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}




const SvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={15}
    fill="none"
  
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 10.25a.5.5 0 0 1 .5.5v1.958c2.749-1.606 4.402-2.741 5.4-3.733.579-.576.897-1.066 1.082-1.534.186-.47.268-.997.268-1.691a4.5 4.5 0 0 0-4.5-4.5h-3.5a4.5 4.5 0 0 0 0 9H7Zm.5 3.903c6.664-3.835 8-5.406 8-8.403A5.75 5.75 0 0 0 9.75 0h-3.5a5.75 5.75 0 1 0 0 11.5v2.509c0 .382.412.623.744.433l.506-.29Z"
      fill="#687684"
    />
  </Svg>
)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
  
  },
  contentSection: {
    backgroundColor:"white",flex:8
  }
});
