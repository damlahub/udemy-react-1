import './App.css';
import Course from './components/Course';
import Header from './components/Header';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import CSharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <section id='cards'>
        <Course
          image={Angular}
          title="Angular"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={Bootstrap}
          title="Bootstrap"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={CSharp}
          title="C#"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={KompleWeb}
          title="Komple Web"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
                <Course
          image={Angular}
          title="Angular"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={Bootstrap}
          title="Bootstrap"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={CSharp}
          title="C#"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
        <Course
          image={KompleWeb}
          title="Komple Web"
          description="Cupidatat nostrud adipisicing cupidatat dolor anim pariatur. Pariatur consequat nisi veniam tempor adipisicing occaecat nostrud enim laboris. In esse Lorem et aliquip elit aliquip aliquip tempor cillum dolore amet ex pariatur cillum. Tempor proident duis laborum labore sit eiusmod laboris exercitation ut eu ipsum consectetur."
        />
      </section>
    </div>
  );
}

export default App;
