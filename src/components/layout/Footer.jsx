export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-300 font-mono text-xs uppercase tracking-widest">
      <aside>
        <p className="font-bold">
          Lio Barrozo <br/>
          Web Developer & Data Analyst
        </p> 
        <p>Copyright © {new Date().getFullYear()} - Mendoza, Argentina</p>
      </aside>
    </footer>
  );
}