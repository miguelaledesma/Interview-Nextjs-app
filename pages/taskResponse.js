import Head from 'next/head'
import Image from 'next/image'
import { Container, Card, Row, Text } from '@nextui-org/react'


export default function Task() {
  return (
    <div>
      <Head>
        <title>Task Response</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style ={{ marginTop: '1rem', marginLeft: '1rem'}}>
      <h1> Things a Product Advocate might do that I like:  </h1> 
      </div>
        

      <div style ={{marginTop: '2rem'}}> 
      <Container fluid >
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Analyze sales inquiries to help spot trends in needs
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 

      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Create queries to look at a prospects typical Vercel usage
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 
      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Hop on a Zoom call to do a product demo
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 

      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Empathize with customers and find ways to continually improve the day-to-day workflow for converting leads
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 
    <div>

      <h2 style ={{ marginTop: '1rem', marginLeft: '1rem'}}>Things I least like: </h2>
      </div>
      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Research and organize notes to ensure Account Executives are prepared for calls
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 
      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Identify the types of prospect (agency, freelancer, executive) and respond accordingly
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 
      <div style ={{marginTop: '2rem'}}> 
      <Container>
      <Card style = {{backgroundColor: 'black'}}>
        <Card.Body>
          
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Work with the Team to make sure email tone is consistent with the Vercel brand
            </Text>
          
        </Card.Body>
      </Card>
    </Container>
      </div> 
    </div>
  )
}
