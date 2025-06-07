import json
import requests

def lambda_handler(event, context):
    # Extract city from the query string parameters
    city = event.get('queryStringParameters', {}).get('city', 'Durgapur')

    # Your OpenWeatherMap API key
    api_key = 'your_openweathermap_api_key'

    # Construct the URL to fetch weather data
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}'

    # Make a request to the OpenWeatherMap API
    response = requests.get(url)

    # Check if the API call was successful
    if response.status_code == 200:
        data = response.json()

        # Extract the needed weather information
        weather_info = {
            "name": data["name"],
            "weather": data["weather"][0],
            "main": data["main"],
            "wind": data["wind"]
        }

        # Return the weather data as a JSON response
        return {
            'statusCode': 200,
            'body': json.dumps(weather_info)
        }
    else:
        # Handle API call failure (e.g., invalid city or API limit reached)
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Unable to fetch weather data'})
        }
