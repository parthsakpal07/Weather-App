import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";


export default function InfoBox({info}) {

    const INIT_URL = 
    "https://images.unsplash.com/photo-1700661248000-6f7725f08c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG92ZXJjYXN0JTIwY2xvdWR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = 
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COlD_URL = 
    "https://images.unsplash.com/photo-1550077404-c00d89693129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = 
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="infobox">
            <h2>Weather Forcast</h2>
            <br></br>
            <Card sx={{ width: 420, maxWidth: '100%' }}>
      <CardMedia
        sx={{ height: 160 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp > 15? HOT_URL : COlD_URL}
        title="green iguana"
      />
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="h5" component="div">
          {info.City} {info.humidity > 80 ? <WaterDropIcon /> : info.temp > 15? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <span>Temperature = {info.temp}&deg;C </span> <br></br>
        <span>Climate = {info.Weather}</span><br></br>
        <span>Humidity = {info.humidity}%</span><br></br>
        <span>Pressure = {info.pressure}</span><br></br>
        <span>Min Temp = {info.tempmin}&deg;C</span><br></br>
        <span>Max Temp = {info.Tempmax}&deg;C</span><br></br>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}