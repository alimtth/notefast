import { createContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const noteContext = createContext();

const initialNotes = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صد کدرز",
    description: `دیزاین یه ماشین حساب رو پیاده کردیم و مروری بر مطالب گذشته شد.
    دیزاین ماشین حساب شبیه ماشین حساب آیفون بود.
    مطالبی که مرور کردیم:
    - html tags
    - css flex
    - dom
    - functions
    - event listener
    
    در ادامه GIT رو نصب کردیم و با دستورات زیر name, email رو کانفیگ کردیم:
    git config --global user.name "FIRST_NAME LAST_NAME"
    git config --global user.email "MY_NAME@example.com"
    
    برای کامیت کردن، ابتدا باید تغییرات رو با دستور زیر به stage اضافه کنیم:
    git add .
    بعد برای کامیت کردن تغییرات تو stage دستور زیر رو استفاده می‌کنیم:
    git commit -m "this is my message for changes"
    
    برای کلون کردن یک ریپازیتوری از دستور زیر استفاده می‌کنیم:
    git clone https://...`,
    date: "۱۸ شهریور ۱۴۰۲",
    color: "#4C86A8",
  },
  {
    id: 2,
    title: "کتاب‌هایی که می‌خوام بخونم",
    description: "برادران کارامازوف ...",
    date: "۱ شهریور ۱۴۰۲",
    color: "#38A3A5",
  },
  {
    id: 3,
    title: "هدف من برای سال جدید",
    description: "اولین هدفم اینه که بتونم ...",
    date: "۲ فروردین ۱۴۰۲",
    color: "#8377D1",
  },
];

function NoteProvider({ children }) {
  const [SearchTerm, setSearchTerm] = useState();
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem("notess");
    return localData ? JSON.parse(localData) : initialNotes;
  });

  const updateNote = (key, newValue) => {
    if (noteId == 0) {
      const newNote = {
        id: notes.length + 1,
        [key]: newValue,
        date: new Date().toLocaleDateString("fa-IR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        color: "#38A3A5",
      };
      setNotes([...notes, newNote]);

      navigate(`/note/${newNote.id}`);

      localStorage.setItem("notess", JSON.stringify([...notes, newNote]));
      return;
    } 
    const newNotes = notes.map((item) => {
      if (item.id != noteId) {
        return item;
      } else {
        item[key] = newValue;
        return item;
      }
    });
    console.log(noteId);
    setNotes(newNotes);
    localStorage.setItem("notess", JSON.stringify([...notes, newNotes]));
    // console.log(newNotes );
  };

  const filterSearch = SearchTerm
  ? notes.filter((note)=> note.title?.includes(SearchTerm))
  : notes;

  const value = {
    notes: filterSearch,
    setNotes,
    updateNote,
    SearchTerm,
    setSearchTerm,
  };

  return <noteContext.Provider value={value}>{children}</noteContext.Provider>;
}

export { NoteProvider, noteContext };
