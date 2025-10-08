import '../styling/Firmware.css';
import { useState } from 'react';

export default function Firmware() {
    const [activeTab, setActiveTab] = useState('rust');

    const renderRustProjects = () => (
        <div className="firmware-section">
            <h2>Rust Embedded Programming</h2>
            
            {/* Rust Blinky Project */}
            <div className="project-card">
                <h3>STM32 LED Blinky (Rust)</h3>
                <p>
                    Embedded Rust application for STM32F4 microcontroller that controls two LEDs 
                    in an alternating blink pattern. This project demonstrates low-level hardware 
                    control using Rust's memory safety features in embedded systems.
                </p>
                
                <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                        <li>STM32F4 microcontroller programming</li>
                        <li>GPIO control and LED manipulation</li>
                        <li>48MHz system clock configuration</li>
                        <li>SysTick timer-based delays</li>
                        <li>Memory-safe embedded Rust code</li>
                        <li>probe-rs debugging and flashing</li>
                    </ul>
                </div>

                <div className="code-snippet">
                    <h4>Core Implementation:</h4>
                    <pre><code>{`// Set up GPIO pins for LEDs
let gpioa = dp.GPIOA.split();
let mut led1 = gpioa.pa6.into_push_pull_output();
let mut led2 = gpioa.pa7.into_push_pull_output();

// Configure system clock to 48MHz
let rcc = dp.RCC.constrain();
let clocks = rcc.cfgr.sysclk(48.MHz()).freeze();

// Create delay abstraction
let mut delay = cp.SYST.delay(&clocks);

loop {
    led1.set_high(); led2.set_low();
    delay.delay_ms(1000_u32);
    
    led1.set_low(); led2.set_high();
    delay.delay_ms(1000_u32);
}`}</code></pre>
                </div>

                <div className="tech-stack">
                    <h4>Technology Stack:</h4>
                    <div className="tech-tags">
                        <span className="tech-tag">Rust</span>
                        <span className="tech-tag">STM32F4</span>
                        <span className="tech-tag">Embedded HAL</span>
                        <span className="tech-tag">Cortex-M</span>
                        <span className="tech-tag">probe-rs</span>
                        <span className="tech-tag">no_std</span>
                    </div>
                </div>

                <a
                    href='https://github.com/Antony-Lester/rust-blinky'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="repo-link"
                >
                    🦀 Rust Blinky Repository
                </a>
            </div>

            {/* Rust Hello World */}
            <div className="project-card">
                <h3>Rust Hello World</h3>
                <p>
                    Foundation Rust programming project demonstrating basic Rust syntax, 
                    ownership principles, and development workflow setup.
                </p>
                
                <div className="features-list">
                    <h4>Learning Objectives:</h4>
                    <ul>
                        <li>Rust toolchain setup and configuration</li>
                        <li>Basic Rust syntax and ownership model</li>
                        <li>Cargo build system fundamentals</li>
                        <li>Memory safety without garbage collection</li>
                    </ul>
                </div>

                <a
                    href='https://github.com/Antony-Lester/rust_hello_world'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="repo-link"
                >
                    🦀 Rust Hello World Repository
                </a>
            </div>
        </div>
    );

    const renderCProjects = () => (
        <div className="firmware-section">
            <h2>C Systems Programming</h2>
            
            <div className="project-card">
                <h3>C Test-Driven Development (Unity)</h3>
                <p>
                    Professional C development project implementing Test-Driven Development (TDD) 
                    using the Unity testing framework. Demonstrates industry best practices for 
                    embedded C programming with comprehensive testing infrastructure.
                </p>
                
                <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Unity testing framework integration</li>
                        <li>Automated test runner generation</li>
                        <li>Makefile-based build system</li>
                        <li>Modular C architecture</li>
                        <li>Header file organization</li>
                        <li>Conditional compilation for testing</li>
                    </ul>
                </div>

                <div className="code-snippet">
                    <h4>Core Implementation:</h4>
                    <pre><code>{`// main.c - Production code
#include <stdio.h>
#include "stdout.h"

#ifndef RUN_TEST 
int main() {
    print_hello();
    return 0;
}
#endif

// stdout.c - Module implementation
void print_hello(void) {
    printf("Hello, Embedded World!\\n");
}`}</code></pre>
                </div>

                <div className="code-snippet">
                    <h4>Test Implementation:</h4>
                    <pre><code>{`// test_pass.c - Unity test
#include "unity.h"

void setUp(void) {
    // Setup code here
}

void tearDown(void) {
    // Teardown code here
}

void test_passing(void) {
    TEST_ASSERT_EQUAL(1, 1);
}`}</code></pre>
                </div>

                <div className="tech-stack">
                    <h4>Technology Stack:</h4>
                    <div className="tech-tags">
                        <span className="tech-tag">C</span>
                        <span className="tech-tag">Unity Framework</span>
                        <span className="tech-tag">GCC</span>
                        <span className="tech-tag">Make</span>
                        <span className="tech-tag">TDD</span>
                        <span className="tech-tag">Ruby</span>
                    </div>
                </div>

                <div className="build-instructions">
                    <h4>Build Process:</h4>
                    <pre><code>{`# Generate test runner
ruby lib/test/Unity/auto/generate_test_runner.rb tests/test_pass.c

# Compile with Unity
gcc -o test_pass_runner tests/test_pass_Runner.c tests/test_pass.c \\
    lib/test/Unity/src/unity.c -Ilib/test/Unity/src -DRUN_TESTS

# Execute tests
./test_pass_runner`}</code></pre>
                </div>

                <a
                    href='https://github.com/Antony-Lester/C-HelloWorld'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="repo-link"
                >
                    🔧 C TDD Project Repository
                </a>
            </div>
        </div>
    );

    return (
        <div 
            className='main' 
            style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                height: '100vh',
                paddingBottom: '75%',
                color: '#4B4B4B',
            }}
        >
            <div className="firmware-header">
                <h1>Systems Programming</h1>
                <p>Embedded systems, firmware development, and low-level programming</p>
            </div>
            
            <div className="firmware-navigation">
                <button 
                    className={`nav-button ${activeTab === 'rust' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rust')}
                >
                    🦀 Rust Projects
                </button>
                <button 
                    className={`nav-button ${activeTab === 'c' ? 'active' : ''}`}
                    onClick={() => setActiveTab('c')}
                >
                    🔧 C Projects
                </button>
            </div>

            <div className="firmware-content">
                {activeTab === 'rust' && renderRustProjects()}
                {activeTab === 'c' && renderCProjects()}
            </div>
        </div>
    );
}
