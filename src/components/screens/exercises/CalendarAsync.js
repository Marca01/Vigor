import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Platform, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import * as Calendar from 'expo-calendar'
import { CalendarList } from 'react-native-calendars'
import moment from 'moment'

export default function CalendarAsync() {

  const [isVisibleStartDay, setIsVisibleStartDay] = useState(false)
  const [isVisibleEndDay, setIsVisibleEndDay] = useState(false)

  const [calendarTitle, setCalendarTitle] = useState('')

  const [currentDay, setCurrentDay] = useState(moment().format())
  const [selectedStartDay, setSelectedStartDay] = useState({
    [`${moment().format('YYYY')}-${moment().format('MM')}-${moment().format('DD')}`]: {
        selected: true,
        selectedColor: 'red',
      },
    })

  const [selectedEndDay, setSelectedEndDay] = useState({
    [`${moment().format('YYYY')}-${moment().format('MM')}-${moment().format('DD')}`]: {
        selected: true,
        selectedColor: 'red',
      },
    })

  const [startDay, setStartDay] = useState(new Date().getDate())
  const [endDay, setEndDay] = useState(new Date().getDate())

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync(Calendar.EntityTypes.EVENT);
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync()
        console.log('Here are all your calendars:')
        console.log({ calendars })
      }
    })()
  }, [])

  const listStartCalendar = () => {
    return (
       <View
        style={{
          width: 350, 
          height: 350, 
          alignSelf: 'center', 
        }}
      >
        <CalendarList 
          style={{
            width: 380,
            height: 350,
          }}
          current={currentDay}
          minDate={moment().format()}
          horizontal
          pastScrollRange={2}
          pagingEnabled
          calendarHeight={350}
          onDayPress={(day) => {
            setSelectedStartDay({
              [day.dateString]: {
                selected: true,
                selectedColor: 'black'
              }
            }),
            setCurrentDay(day.dateString)
            setStartDay(day.dateString)
            console.log(startDay)
          }}
          monthFormat='yyyy MMMM'
          hideArrows
          markingType={'simple'}
          firstDay={1}
          markedDates={selectedStartDay}
        />
      </View>
    )
  }

  const listEndCalendar = () => {
    return (
       <View
        style={{
          width: 350, 
          height: 350, 
          alignSelf: 'center', 
        }}
      >
        <CalendarList 
          style={{
            width: 380,
            height: 350,
          }}
          current={currentDay}
          minDate={moment().format()}
          horizontal
          pastScrollRange={2}
          pagingEnabled
          calendarHeight={350}
          onDayPress={(day) => {
            setSelectedEndDay({
              [day.dateString]: {
                selected: true,
                selectedColor: 'black'
              }
            }),
            setCurrentDay(day.dateString)
            setEndDay(day.dateString)
            console.log(endDay)
          }}
          monthFormat='yyyy MMMM'
          hideArrows
          markingType={'simple'}
          firstDay={1}
          markedDates={selectedEndDay}
        />
      </View>
    )
  }

  // const createEventCalendar = async () => {
  //   const calendarId = await Calendar.createCalendarAsync({entityType: Calendar.EntityTypes.EVENT})
  //   try {
  //     const createEvent = await addToCalendar(calendarId)
  //     setCreateEvent(createEvent)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const addToCalendar = async () => {
    const event = {
      title: calendarTitle,
      startDate: moment(startDay).toDate(),
      endDate: moment(endDay).toDate(),
    }

    try {
      const addEventToCalendarAsync = await Calendar.createEventAsync(
        'B4B018C4-1AC7-49B2-85F6-0F783D1F7D2B',
        event
      )
      return addEventToCalendarAsync
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 40}}>Calendar</Text>
          <View style={styles.calendarContainer}>
            <TextInput
              style={{
                marginBottom: 20,
              }}
              onChangeText={title => setCalendarTitle(title)}
              value={calendarTitle}
              placeholder='Title'
            />
            <TouchableOpacity
              onPress={() => setIsVisibleStartDay(true)}
            >
              <Text>Start day {startDay}</Text>
            </TouchableOpacity>
            {isVisibleStartDay && listStartCalendar()}
            <TouchableOpacity
              onPress={() => setIsVisibleEndDay(true)}
            >
              <Text>End day {endDay}</Text>
            </TouchableOpacity>
            {isVisibleEndDay && listEndCalendar()}
          </View>
        {/* <Button title="Create a new calendar" onPress={createCalendar} /> */}
        <Button 
          title='Add to calendar' 
          onPress={addToCalendar} 
        />
      </SafeAreaView>
    </ScrollView>
  );
}

async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
//   const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
	// return defaultCalendars = calendars.find(cal => cal.source && cal.source.name === 'Default').source.id;
//   return defaultCalendars[0].source.id;
  return calendars;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Khale Calendar',
    color: 'grey',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    flex: 1,
    marginTop: 50
  },  
});
